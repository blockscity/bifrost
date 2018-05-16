import React from 'react';
import {Platform, View, Alert} from 'react-native';
import {Navigation} from 'react-native-navigation';
import {Provider} from "react-redux";
import {registerScreens} from './screens';
import {configureStore} from './store';

configureStore().then(store => {
    registerScreens(store, Provider);
    const tabs = [{
        label: 'Navigation',
        screen: 'example.Transitions',
        icon: require('./imgs/swap.png'),
        title: 'Navigation Types',
    }, {
        label: 'Actions',
        screen: 'example.Transitions',
        icon: require('./imgs/swap.png'),
        title: 'Navigation Actions',
    }];

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
})