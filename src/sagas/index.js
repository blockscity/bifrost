import {take, fork, select, call, put} from 'redux-saga/effects';
import {isEmpty} from 'lodash';
import * as actions from '../actions';
import {identity} from '../reducers/selectors'
import {identities} from '../services';

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
            yield call(identities.createIdentity, payload.username, payload.password);
        } else {
            yield call(identities.createIdentity, payload.username, payload.password);
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
