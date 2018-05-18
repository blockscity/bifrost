import React from 'react';
import {Provider} from "react-redux";
import {registerScreens} from './screens';
import {configureStore} from './store';
import * as actions from './actions';
import {isNil, isEmpty} from 'lodash';

configureStore().then(store => {
    registerScreens(store, Provider);
    const tabs = [{
        label: 'Personal',
        screen: 'bifrost.Personal',
        icon: require('./imgs/swap.png'),
        title: 'Personal',
    }, {
        label: 'Notifications',
        screen: 'bifrost.Notifications',
        icon: require('./imgs/swap.png'),
        title: 'Notifications',
    }];

    store.dispatch(actions.startup());
});