import {Navigation} from 'react-native-navigation';
import Login from '../screens/Login';
import Loading from '../screens/Loading';
import Home from '../screens/Home';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('dating.login', () => Login, store, Provider);
    Navigation.registerComponent('dating.loading', () => Loading, store, Provider);
    Navigation.registerComponent('dating.home', () => Home, store, Provider);
}