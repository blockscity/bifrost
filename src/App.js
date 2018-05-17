import React from 'react';
import {Platform, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
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

    store.subscribe(() => {
        let {identity} = store.getState();

        if (isNil(identity) || isEmpty(identity)) {
            Navigation.startSingleScreenApp({
                screen: {
                    screen: 'bifrost.Register',
                    title: 'Welcome',
                    navigatorStyle: {},
                    navigatorButtons: {}
                },
            });
        } else {
            this.currentIden = identity;
            Navigation.startTabBasedApp({
                tabs,
                animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
                tabsStyle: {
                    tabBarBackgroundColor: '#003a66',
                    tabBarButtonColor: '#ffffff',
                    tabBarSelectedButtonColor: '#ff505c',
                    tabFontFamily: 'BioRhyme-Bold',
                },
                appStyle: {
                    tabBarBackgroundColor: '#003a66',
                    navBarButtonColor: '#ffffff',
                    tabBarButtonColor: '#ffffff',
                    navBarTextColor: '#ffffff',
                    tabBarSelectedButtonColor: '#ff505c',
                    navigationBarColor: '#003a66',
                    navBarBackgroundColor: '#003a66',
                    statusBarColor: '#002b4c',
                    tabFontFamily: 'BioRhyme-Bold',
                }
            });
        }
    });

    store.dispatch(actions.init());
});