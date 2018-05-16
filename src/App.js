import React from 'react';
import {Platform, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from "react-redux";
import {registerScreens} from './screens';
import {configureStore} from './store';
import * as actions from './actions';

configureStore().then(store => {
    registerScreens(store, Provider);
    const tabs = [{
        label: 'Navigation',
        screen: 'example.Register',
        icon: require('./imgs/swap.png'),
        title: 'Navigation Types',
    }, {
        label: 'Actions',
        screen: 'example.Register',
        icon: require('./imgs/swap.png'),
        title: 'Navigation Actions',
    }];

    // Navigation.startTabBasedApp({
    //     tabs,
    //     animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade',
    //     tabsStyle: {
    //         tabBarBackgroundColor: '#003a66',
    //         tabBarButtonColor: '#ffffff',
    //         tabBarSelectedButtonColor: '#ff505c',
    //         tabFontFamily: 'BioRhyme-Bold',
    //     },
    //     appStyle: {
    //         tabBarBackgroundColor: '#003a66',
    //         navBarButtonColor: '#ffffff',
    //         tabBarButtonColor: '#ffffff',
    //         navBarTextColor: '#ffffff',
    //         tabBarSelectedButtonColor: '#ff505c',
    //         navigationBarColor: '#003a66',
    //         navBarBackgroundColor: '#003a66',
    //         statusBarColor: '#002b4c',
    //         tabFontFamily: 'BioRhyme-Bold',
    //     }
    // });

    store.subscribe(() => {
        let {identity} = store.getState();
        if (this.currentIden !== identity) {
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

        // Navigation.startSingleScreenApp({
        //     screen: {
        //         screen: 'ReactNativeReduxExample.Login', // unique ID registered with Navigation.registerScreen
        //         title: 'Welcome', // title of the screen as appears in the nav bar (optional)
        //         navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        //         navigatorButtons: {} // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
        //     },
        // });
        // }
    });

    store.dispatch(actions.init());
});