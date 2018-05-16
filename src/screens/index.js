import {Navigation} from 'react-native-navigation';
import Register from './Register';

export function registerScreens(store, provider) {
    Navigation.registerComponent('example.Register', () => Register, store, provider);
}