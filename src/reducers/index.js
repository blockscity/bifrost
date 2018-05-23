import {combineReducers} from 'redux';
import {REQUEST, SUCCESS, FAILURE} from '../actions';
import {IDENTITY, IPFS, KEYSTORE, CLAIMS} from '../actions/types';

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

function ipfs(state = {}, action) {
    switch (action.type) {
        case `${IPFS.UPLOAD}_${SUCCESS}`:
            return Object.assign(state, {ipfs: action.payload.ipfs});
        default:
            return state;
    }
}

function claims(state = [], action) {
    switch (action.type) {
        case `${CLAIMS.SET}_${SUCCESS}`:
            return [...state, {claim: action.payload.claim}];
        default:
            return state;
    }
}

const reducers = combineReducers({
    keystore,
    identity,
    ipfs,
    claims
});

export default reducers
