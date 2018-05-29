import './src/firebaseInit';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'mobx-react';

import AppNavigator from './src/AppNavigator';
import stores from './src/stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <AppNavigator />
      </Provider>
    );
  }
}
