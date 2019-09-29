'use strict';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './app/store';
import RouteNavigator from './app/index';
import SplashScreen from 'react-native-splash-screen'
/**
 * Gets the store and registered scenes and sets that to provider
 */
class App extends Component {
  
  componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      SplashScreen.hide();
  }
    render() {
      return (
        <Provider store={store}>
          <RouteNavigator />
        </Provider>
      );
    }
  }

  export default App;