import {combineReducers} from 'redux';
import {REQUEST, SUCCESS, FAILURE} from '../actions';
import {IDENTITY, KEYSTORE} from '../actions/types';

function keystore(state = {}, action) {
    switch (action.type) {
        case `${KEYSTORE}_${SUCCESS}`:
            return Object.assign(state, JSON.parse(action.payload.keystore.serialize()));
        default:
            return state;
    }
}

function identity(state = {}, action) {
    switch (action.type) {
        case `${IDENTITY}_${SUCCESS}`:
            return Object.assign(state, {identity: action.payload.identity});
        default:
            return state;
    }
}

const reducers = combineReducers({
    keystore, identity,
});

export default reducers
