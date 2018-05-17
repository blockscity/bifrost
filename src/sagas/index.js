import {take, fork, select, call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {KEYSTORE, IDENTITY} from "../actions/types";
import {keystore} from '../reducers/selectors'
import {keystore as keystoreService, identities as identityService} from '../services';
import promisified from './promisified';
import Promise from 'bluebird';

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
                // yield fork(signin, payload, meta);
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
                let newVar = yield fork(identityService.identities, payload, meta);
                break;
            case `${IDENTITY}_${actions.SUCCESS}`:
                // yield fork(signin, payload, meta);
                break;
            default:
                continue;
        }
    }
}


export default function* () {
    yield [
        fork(logger),
        fork(keystoreSaga),
        fork(identitiesSaga),
        fork(promisified),
    ];
}
