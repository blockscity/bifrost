import {take, fork, select, call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {identity} from '../reducers/selectors'
import {identities} from '../services';

function* logger() {
    while (true) {
        var action = yield take("*");
        const state = yield select();
        console.log("Action: " + JSON.stringify(action) + " happend with state: " + JSON.stringify(state));
    }
}

function* authentication() {
    function* signin(payload, meta) {
        const identity = yield select(identity);
        if (!identity || isEmpty(identity)) {
            yield call(identities.createIdentity(payload.username, payload.password), values);
        } else {
            // yield put(actions.signin.success(values, user));
            yield call(identities.createIdentity(payload.username, payload.password), values);
        }
    }

    while (true) {
        const {type, payload, meta} = yield take(["IDENTITY_CREATE"]);
        switch (type) {
            case "IDENTITY_CREATE":
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
    ];
}
