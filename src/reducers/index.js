import {combineReducers} from 'redux';

function getIdentity(state = {}, action) {
    switch (action.type) {
        case "IDENTITY_CREATE":
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
