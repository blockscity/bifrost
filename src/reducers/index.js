import {combineReducers} from 'redux';
import {REQUEST, SUCCESS, FAILURE} from '../actions';
import {KEYSTORE} from '../actions/types';

function keystore(state = {}, action) {
    switch (action.type) {
        case `${KEYSTORE}_${SUCCESS}`:
            return Object.assign(state, JSON.parse(action.payload.keystore.serialize()));
        default:
            return state;
    }
}

const reducers = combineReducers({
    keystore
});

export default reducers
