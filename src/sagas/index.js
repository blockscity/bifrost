import {take, fork, select, call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {identity} from '../reducers/selectors'
import {identities} from '../services';
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
        const identi = yield select(identity);
        if (!identi || isEmpty(identi)) {
            try {
                let newVar = yield call(identities.createIdentity, payload.username, payload.password);
                yield put(actions.identity.success(newVar));
            } catch (e) {
                yield put(actions.identity.failure(e));
            }
        } else {
            yield put(actions.identity.success({}));
        }
    }

    while (true) {
        const {type, payload, meta} = yield take([actions.identity.REQUEST]);
        switch (type) {
            case `IDENTITY_${actions.REQUEST}`:
                yield fork(signin, payload, meta);
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
