import {take, fork, select, call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {KEYSTORE} from "../actions/types";
import {keystore} from '../reducers/selectors'
import {keystore as keystoreService} from '../services';
import promisify from './promisify';

function* logger() {
    while (true) {
        const action = yield take("*");
        const state = yield select();
        console.log("Action: " + JSON.stringify(action) + " happend with state: " + JSON.stringify(state));
    }
}

function* authentication() {
    function* signin(payload, meta) {
        const ks = yield select(keystore);
        if (!ks || isEmpty(ks)) {
            try {
                let keystore = yield call(keystoreService.createKeystore, payload.password);
                yield put(actions.keystore.success(keystore));
            } catch (e) {
                yield put(actions.keystore.failure(e));
            }
        } else {
            yield put(actions.keystore.success(ks));
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


export default function* () {
    yield [
        fork(logger),
        fork(authentication),
        fork(promisify),
    ];
}
