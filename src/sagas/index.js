import {take, fork, select, call, put, all} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import Promise from 'bluebird';
import {Navigation} from "react-native-navigation";
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as actions from '../actions';
import {INITIALIZE, KEYSTORE, IDENTITY, IPFS, SEED, CLAIMS} from "../actions/types";
import {REQUEST, SUCCESS, FAILURE} from "../actions";
import * as selectors from '../reducers/selectors';
import promisified from './promisified';
import {
    keystore as keystoreService,
    identities as identityService,
    ipfs as ipfsService,
    claims as claimsService
} from '../services';

function* logger() {
    while (true) {
        const action = yield take("*");
        const state = yield select();
        console.log("Action: " + JSON.stringify(action) + " happend with state: " + JSON.stringify(state));
    }
}

function* requestSagas() {
    function* keystoreHandler(payload, meta) {
        const ks = yield select(selectors.keystore);

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
            yield put(actions.keystore.success({keystore: ks}));
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
                identity: {...identity}
            }));
        }

    }

    function* ipfsHandler(payload, meta) {
        const ipfs = yield select(state => state.ipfs);
        if (!ipfs || isEmpty(ipfs)) {
            try {
                let result = yield call(ipfsService.upload, payload, meta);
                yield put(actions.ipfs.upload.success({ipfs: result}));
            } catch (e) {
                yield put(actions.ipfs.upload.failure(
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
            yield put(actions.ipfs.upload.success({ipfs: ipfs}));
        }

    }

    function* claimsHandler(payload, meta) {
        const claims = yield select(state => state.claims);
        let ks = yield select(selectors.keystore);
        ks.passwordProvider = function (callback) {
            callback(null, '111');
        };
        const {ipfs} = payload;
        // todo: should check whether the key is existed
        if (!claims || isEmpty(claims)) {
            try {

                let result = yield call(claimsService.set, ks, ipfs);
                console.log(result);
                yield put(actions.claims.set.success({claim: result}));
            } catch (e) {
                console.error(e);
                yield put(actions.claims.set.failure(
                    {
                        errors: [
                            {
                                detail: e
                            }
                        ]
                    })
                );
            }
        } else {
            //todo: should find the claim and return success
            yield put(actions.claims.set.success({claim: {key: "key", value: "value"}}));
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
            case `${IPFS.UPLOAD}_${REQUEST}`:
                yield fork(ipfsHandler, payload, meta);
                break;
            case `${CLAIMS.SET}_${REQUEST}`:
                yield fork(claimsHandler, payload, meta);
                break;
            case `${INITIALIZE}_${REQUEST}`:
                let ks = yield select(selectors.keystore);
                if (ks && !isEmpty(ks)) {
                    yield put(actions.initialize.success());
                } else {
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
                }
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
                yield put(actions.ipfs.upload.request({
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
            case `${IPFS.UPLOAD}_${SUCCESS}`:
                //todo: should call the claims and save the hash
                yield put(actions.claims.set.request({
                    ipfs: payload.ipfs
                }));
                break;
            case `${INITIALIZE}_${SUCCESS}`:
                const navigatorStyle = {
                    navBarTextColor: 'white',
                    navBarButtonColor: 'white',
                    statusBarTextColorScheme: 'light',
                    statusBarColor: '#000000',
                    navBarBackgroundColor: "dark",
                    navBarNoBorder: true
                };


                try {
                    const icons = yield Promise.all([
                        Icon.getImageSource('chat', 30),
                        Icon.getImageSource('notifications', 30),
                        Icon.getImageSource('person', 30),
                    ]);

                    const [chats, notifications, person] = icons;
                    const tabs = [
                        {
                            label: 'Chats',
                            screen: 'bifrost.Personal',
                            icon: chats,
                            title: 'Chats',
                            navigatorStyle
                        },
                        {
                            label: 'Notifications',
                            screen: 'bifrost.Notifications',
                            icon: notifications,
                            title: 'Notifications',
                            navigatorStyle
                        },
                        {
                            label: 'Me',
                            screen: 'bifrost.Personal',
                            icon: person,
                            title: 'Me',
                            navigatorStyle
                        }
                    ];
                    yield fork(Navigation.startTabBasedApp, {
                        tabs,
                        animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
                        tabsStyle: {
                            tabBarButtonColor: 'grey',
                            tabBarSelectedButtonColor: 'green',
                            tabBarBackgroundColor: 'while',
                        },
                        appStyle: {
                            tabBarBackgroundColor: 'dark',
                            navBarButtonColor: '#ffffff',
                            tabBarButtonColor: '#ffffff',
                            navBarTextColor: '#ffffff',
                            tabBarSelectedButtonColor: '#ff505c',
                            navigationBarColor: '#003a66',
                            navBarBackgroundColor: 'black',

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

function* failureSaga() {
    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(FAILURE));
        switch (type) {
            default:
                console.error("failure", type, payload);
        }
    }
}

export default function* () {
    yield all([
        fork(logger),
        fork(requestSagas),
        fork(successSaga),
        fork(failureSaga),
        fork(promisified),
    ]);
}
