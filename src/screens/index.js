import {Navigation} from 'react-native-navigation';
import Transitions from './Transitions';

export function registerScreens() {
    Navigation.registerComponent('example.Transitions', () => Transitions);
}