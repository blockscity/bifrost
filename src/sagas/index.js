import {take, fork, select, call, put, all} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {KEYSTORE, IDENTITY} from "../actions/types";
import {REQUEST, SUCCESS, FAILURE} from "../actions";
import {keystore} from '../reducers/selectors'
import {keystore as keystoreService, identities as identityService} from '../services';
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
    function* signin(payload, meta) {
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
                yield put(actions.identities.request({keystore: created, derivedKey: derivedKey}));
            } catch (e) {
                yield put(actions.keystore.failure(e));
            }
        } else {
            let rehydrated = yield call(keystoreService.rehydrate, JSON.stringify(ks));
            yield put(actions.keystore.success({keystore: rehydrated}));
        }
    }

    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(REQUEST));
        switch (type) {
            case `${IDENTITY}_${REQUEST}`:
                try {
                    let newVar = yield call(identityService.identities, payload, meta);
                    yield put(actions.identities.success({aa: "test"}));
                } catch (e) {
                    yield put(actions.identities.failure({aa: "test"}));
                }
                break;
            case `${KEYSTORE}_${actions.REQUEST}`:
                yield fork(signin, payload, meta);
                break;
            default:
                console.log("success");
        }
    }
}

function* successSaga() {
    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.endsWith(SUCCESS));
        switch (type) {
            case `${IDENTITY}_${SUCCESS}`:
                yield put(actions.started());
                break;
            case `${KEYSTORE}_${actions.SUCCESS}`:
                let keystore = payload.keystore;
                keystore.passwordProvider = function (callback) {
                    callback(null, '111');
                };
                let derivedKey = yield call(Promise.promisify(keystore.keyFromPassword, {context: keystore}), '111');
                yield put(actions.identities.request({keystore: keystore, derivedKey: derivedKey}));
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
                console.error("failure", type);
        }
    }
}

function* navigationSaga() {
    while (true) {
        const {type} = yield take(ac => ac.type.startsWith("START"));
        switch (type) {
            case "STARTUP":
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
                    console.log(e, "error for startupd")
                }
                break;
            case "STARTED":
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
