import { Navigation } from 'react-native-navigation';
import {store} from './src/redux/store';
import {Provider} from "react-redux";
import React from 'react';
import * as actions from './src/redux/actions';
import { registerScreens } from './src/config/registerScreens';
registerScreens(store, Provider);

export default class App extends React.Component {
    constructor(props) {
        super(props);
        store.subscribe(this.onStoreUpdate.bind(this));
        store.dispatch(actions.appInitialized());
    }
    onStoreUpdate() {
        const {root} = store.getState().app;
        if (this.currentRoot != root) {
          this.currentRoot = root;
          this.startApp(root);
        }
    }
    startApp(root) {
        switch (root) {
          case 'login':
            Navigation.startSingleScreenApp({
              screen: {
                screen: 'dating.home',
              },
            });
          return;
          case 'after-login':
            Navigation.startSingleScreenApp({
              screen: {
                screen: 'dating.home',
              },
            });
          return;
          default:
          console.error('Unknown app root');      
        }
    }
}