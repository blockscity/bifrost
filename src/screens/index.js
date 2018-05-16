import {Navigation} from 'react-native-navigation';
import Transitions from './Transitions';

export function registerScreens(store, provider) {
    Navigation.registerComponent('example.Transitions', () => Transitions, store, provider);
}