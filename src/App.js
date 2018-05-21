import React from 'react';
import {Provider} from "react-redux";
import {registerScreens} from './screens';
import {configureStore} from './store';
import * as actions from './actions';

configureStore().then(store => {
    registerScreens(store, Provider);
    store.dispatch(actions.startup());
});