import {take, fork, select, call, put, all} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {KEYSTORE, IDENTITY} from "../actions/types";
import {keystore} from '../reducers/selectors'
import {keystore as keystoreService, identities as identityService} from '../services';
import promisified from './promisified';
import Promise from 'bluebird';
import {Navigation} from "react-native-navigation";
import {Platform, View, Alert} from 'react-native';

function* logger() {
    while (true) {
        const action = yield take("*");
        const state = yield select();
        console.log("Action: " + JSON.stringify(action) + " happend with state: " + JSON.stringify(state));
    }
}


function* keystoreSaga() {
    function* signin(payload, meta) {
        const ks = yield select(keystore);
        if (!ks || isEmpty(ks)) {
            try {
                let created = yield call(keystoreService.create, payload.password);
                let derivedKey = yield call(Promise.promisify(created.keyFromPassword, {context: created}), payload.password);
                let seed = created.getSeed(derivedKey);
                yield put(actions.seed.success(seed));
                yield put(actions.keystore.success(created));
                created.passwordProvider = function (callback) {
                    callback(null, payload.password);
                };

                yield put(actions.identities.request({keystore: created, derivedKey: derivedKey}));
            } catch (e) {
                yield put(actions.keystore.failure(e));
            }
        } else {
            let rehydrated = yield call(keystoreService.rehydrate, JSON.stringify(ks));
            yield put(actions.keystore.success(rehydrated));
        }
    }

    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.startsWith(KEYSTORE));
        switch (type) {
            case `${KEYSTORE}_${actions.REQUEST}`:
                yield fork(signin, payload, meta);
                break;
            case `${KEYSTORE}_${actions.SUCCESS}`:
                break;
            default:
                continue;
        }
    }
}

function* identitiesSaga() {
    while (true) {
        const {type, payload, meta} = yield take(ac => ac.type.startsWith(IDENTITY));
        switch (type) {
            case `${IDENTITY}_${actions.REQUEST}`:
                let newVar = yield call(identityService.identities, payload, meta);
                yield put(actions.identities.success({aa: newVar}));
                break;
            case `${IDENTITY}_${actions.SUCCESS}`:
                yield put(actions.started());
                break;
            default:
        }
    }
}

function* navigationSaga() {
    while (true) {
        const {type} = yield take(ac => ac.type.startsWith("START"));
        switch (type) {
            case "STARTUP":
                try {
                    yield call(Navigation.startSingleScreenApp, {
                        screen: {
                            screen: 'bifrost.Register',
                            title: 'Welcome',
                            navigatorStyle: {},
                            navigatorButtons: {}
                        },
                    });
                } catch (e) {

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
                    yield call(Navigation.startTabBasedApp, {
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

                }
                break;
            default:
        }
    }
}


export default function* () {
    yield all([
        fork(logger),
        fork(keystoreSaga),
        fork(identitiesSaga),
        fork(navigationSaga),
        fork(promisified),
    ]);
}
