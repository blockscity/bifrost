import {combineReducers} from 'redux';
import {REQUEST, SUCCESS, FAILURE} from '../actions';

function getIdentity(state = {}, action) {
    switch (action.type) {
        case `IDENTITY_${SUCCESS}`:
            return {
                "identity": "test"
            };
        default:
            return state;
    }
}

const reducers = combineReducers({
    identity: getIdentity
});

export default reducers
