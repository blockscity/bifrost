import {Navigation} from 'react-native-navigation';
import Register from './Register';
import Personal from "./Personal";
import Notifications from './Notifications';

export function registerScreens(store, provider) {
    Navigation.registerComponent('bifrost.Register', () => Register, store, provider);
    Navigation.registerComponent('bifrost.Personal', () => Personal, store, provider);
    Navigation.registerComponent('bifrost.Notifications', () => Notifications, store, provider);
}