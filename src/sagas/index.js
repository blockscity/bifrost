import {take, fork, select, call, put, all} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {INITIALIZE, KEYSTORE, IDENTITY, IPFS_UPLOAD, SEED, CLAIMS} from "../actions/types";
import {REQUEST, SUCCESS, FAILURE} from "../actions";
import {keystore} from '../reducers/selectors'
import {
    keystore as keystoreService,
    identities as identityService,
    ipfs as ipfsService,
    claims as claimsService
} from '../services';
import promisified from './promisified';
import Promise from 'bluebird';
import {Navigation} from "react-native-navigation";
import {Platform} from 'react-native';

function* logger() {
    while (true) {
        const action = yield take("*");
        const state = yield select();
        console.log("Action: " + JSON.stringify(action) + " happend with state: " + JSON.stringify(state));
    }
}

function* requestSagas() {
    function* keystoreHandler(payload, meta) {
        const ks = yield select(keystore);

        if (!ks || isEmpty(ks)) {
            try {
                let created = yield call(keystoreService.create, payload.password);
                let derivedKey = yield call(Promise.promisify(created.keyFromPassword, {context: created}), payload.password);
                let seed = created.getSeed(derivedKey);
                yield put(actions.seed.success(seed));
                created.passwordProvider = function (callback) {
                    callback(null, payload.password);
                };
                yield put(actions.keystore.success({keystore: created}));
            } catch (e) {
                yield put(actions.keystore.failure(e));
            }
        } else {
            let rehydrated = yield call(keystoreService.rehydrate, JSON.stringify(ks));
            yield put(actions.keystore.success({keystore: rehydrated}));
        }
    }

    function* identityHandler(payload, meta) {
        const identity = yield select(state => state.identity);
        if (!identity || isEmpty(identity)) {
            try {
                let identity = yield call(identityService.identities, payload, meta);
                yield put(actions.identities.success({
                    identity: identity
                }));
            } catch (e) {
                yield put(actions.identities.failure({
                    errors: [
                        {
                            detail: e.toString()
                        }
                    ]
                }));
            }
        } else {
            yield put(actions.identities.success({
                identity: identity
            }));
        }

    }

    function* ipfsHandler(payload, meta) {
        const ipfs = yield select(state => state.ipfs);
        if (!ipfs || isEmpty(ipfs)) {
            try {
                let result = yield call(ipfsService.upload, payload, meta);
                yield put(actions.ipfsUpload.success({ipfs: result}));
            } catch (e) {
                yield put(actions.ipfsUpload.failure(
                    {
                        errors: [
                            {
                                detail: e.toString()
                            }
                        ]
                    })
                );
            }
        } else {
            yield put(actions.ipfsUpload.success({ipfs: ipfs}));
        }

    }

    function* claimsHandler(payload, meta) {
        const claims = yield select(state => state.claims);
        if (!claims || isEmpty(claims)) {
            try {
                let result = yield call(claimsService.set, payload, meta);
                yield put(actions.claims.set.success({claim: result}));
            } catch (e) {
                yield put(actions.claims.set.failure(
                    {
                        errors: [
                            {
                                detail: e.toString()
                            }
                        ]
                    })
                );
            }
        } else {
            yield put(actions.claims.set.success({claim: result}));
        }
    }

    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(REQUEST));
        switch (type) {
            case `${IDENTITY}_${REQUEST}`:
                yield fork(identityHandler, payload, meta);
                break;
            case `${KEYSTORE}_${REQUEST}`:
                yield fork(keystoreHandler, payload, meta);
                break;
            case `${IPFS_UPLOAD}_${REQUEST}`:
                yield fork(ipfsHandler, payload, meta);
                break;
            case `${CLAIMS.SET}_${REQUEST}`:
                yield fork(claimsHandler, payload, meta);
                break;
            default:
        }
    }
}

function* successSaga() {
    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(SUCCESS));
        switch (type) {
            case `${IDENTITY}_${SUCCESS}`:
                // call the ipfs save the identity and the pub key
                yield put(actions.ipfsUpload.request({
                    body: {
                        id: payload.identity.id,
                        publicKey: [{
                            id: "",
                            type: "type",
                            value: ""
                        }],
                        authentication: [
                            {
                                type: "RsaSignatureAuthentication2018",
                                publicKey: ""
                            }
                        ]
                    }
                }));
                // call the ethereum and save the ipfs key
                yield put(actions.initialize.success());
                break;
            case `${KEYSTORE}_${SUCCESS}`:
                let keystore = payload.keystore;
                keystore.passwordProvider = function (callback) {
                    callback(null, '111');
                };
                let derivedKey = yield call(Promise.promisify(keystore.keyFromPassword, {context: keystore}), '111');
                yield put(actions.identities.request({keystore: keystore, derivedKey: derivedKey}));
                break;
            case `${IPFS_UPLOAD}_${SUCCESS}`:
                //todo: should call the claims and save the hash
                yield put(actions.claims.set.request({
                    ipfs: payload.ipfs
                }));
                break;
            default:
        }
    }
}

function* failureSaga() {
    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(FAILURE));
        switch (type) {
            default:
                console.error("failure", type, payload);
        }
    }
}

function* navigationSaga() {
    while (true) {
        const {type} = yield take(ac => ac.type.startsWith(INITIALIZE));
        switch (type) {
            case `${INITIALIZE}_${REQUEST}`:
                try {
                    yield fork(Navigation.startSingleScreenApp, {
                        screen: {
                            screen: 'bifrost.Register',
                            title: 'Welcome',
                            navigatorStyle: {},
                            navigatorButtons: {}
                        },
                    });
                } catch (e) {
                    console.log(e, "error initialize")
                }
                break;
            case `${INITIALIZE}_${SUCCESS}`:
                const tabs = [{
                    label: 'Personal',
                    screen: 'bifrost.Personal',
                    icon: require('../imgs/swap.png'),
                    title: 'Personal',
                }, {
                    label: 'Notifications',
                    screen: 'bifrost.Notifications',
                    icon: require('../imgs/swap.png'),
                    title: 'Notifications',
                }];
                try {
                    yield fork(Navigation.startTabBasedApp, {
                        tabs,
                        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
                        tabsStyle: {
                            tabBarBackgroundColor: '#003a66',
                            tabBarButtonColor: '#ffffff',
                            tabBarSelectedButtonColor: '#ff505c',
                            tabFontFamily: 'BioRhyme-Bold',
                        },
                        appStyle: {
                            tabBarBackgroundColor: '#003a66',
                            navBarButtonColor: '#ffffff',
                            tabBarButtonColor: '#ffffff',
                            navBarTextColor: '#ffffff',
                            tabBarSelectedButtonColor: '#ff505c',
                            navigationBarColor: '#003a66',
                            navBarBackgroundColor: '#003a66',
                            statusBarColor: '#002b4c',
                            tabFontFamily: 'BioRhyme-Bold',
                        }
                    });
                } catch (e) {
                    console.log(e, "error for started")
                }
                break;
            default:
        }
    }
}


export default function* () {
    yield all([
        fork(logger),
        fork(requestSagas),
        fork(successSaga),
        fork(failureSaga),
        fork(navigationSaga),
        fork(promisified),
    ]);
}
