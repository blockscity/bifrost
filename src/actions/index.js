import {createAction} from 'redux-actions';


export function init() {
    return {
        type: "INIT",
        root: {}
    };
}


export const createIdentity = createAction("IDENTITY_CREATE");