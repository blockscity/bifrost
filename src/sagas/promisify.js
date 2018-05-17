import {take, call, put, race, takeEvery} from 'redux-saga/effects';
import {PROMISIFIED} from "../actions";

export function* promisifyHandler({ payload }) {
    const { request, defer, types } = payload;
    const { resolve, reject } = defer;
    const [ SUCCESS, FAILURE ] = types;

    const [ { success, failure } ] = yield [
        race({
            success: take(SUCCESS),
            failure: take(FAILURE),
        }),
        put(request),
    ];

    if (success) {
        yield call(resolve);
    } else {
        yield call(reject, failure && failure.payload ? failure.payload : failure);
    }
}

export default function* actionsWatcherSaga() {
    yield takeEvery(PROMISIFIED, promisifyHandler);
}