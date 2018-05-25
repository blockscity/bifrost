import {Navigation} from 'react-native-navigation';
import Register from './Register';
import Personal from "./Personal";
import Mnemonic from './Mnemonic';
import Notifications from './Notifications';
import Chats from './Chats';

export function registerScreens(store, provider) {
    Navigation.registerComponent('bifrost.Register', () => Register, store, provider);
    Navigation.registerComponent('bifrost.Personal', () => Personal, store, provider);
    Navigation.registerComponent('bifrost.Notifications', () => Notifications, store, provider);
    Navigation.registerComponent('bifrost.Mnemonic', () => Mnemonic, store, provider);
    Navigation.registerComponent('bifrost.Chats', () => Chats, store, provider);
}