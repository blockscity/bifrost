import {combineReducers} from 'redux';

const reducers = combineReducers({
    identity: (state = {}, action) => {
        return state;
    }
});

export default reducers
