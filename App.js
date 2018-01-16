import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading, Asset, Font } from 'expo';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Sentry } from 'react-native-sentry';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';

import Router from './Router';

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  componentWillMount() {    
    //Sentry
    if(!__DEV__)
      Sentry.config('https://95fb7deacd44449c96ce2a07ee8bc6ea:953dac9d096142dcbb16a7df20dba08c@sentry.io/272720').install();
    
    //firebase
    /*const config = {
      
    };
    firebase.initializeApp(config);
    */
  }

  renderApp() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return this.renderApp();
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      //Images
      /*Asset.loadAsync([
        require('./assets/happy_puppy.jpg'),
        require('./assets/innocent_puppy.jpg'),
      ]),*/
      //Primary Fonts
      Font.loadAsync({
        'Open Sans': require('./assets/fonts/OpenSans-Regular.ttf'),
        'Open Sans Italic': require('./assets/fonts/OpenSans-Italic.ttf'),
        'Open Sans Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
        'Open Sans BoldItalic': require('./assets/fonts/OpenSans-BoldItalic.ttf'),
        'Open Sans Light': require('./assets/fonts/OpenSans-Light.ttf'),
        'Open Sans LightItalic': require('./assets/fonts/OpenSans-LightItalic.ttf'),
        'Open Sans SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
        'Open Sans SemiBoldItalic': require('./assets/fonts/OpenSans-SemiBoldItalic.ttf'),
        'Open Sans ExtraBold': require('./assets/fonts/OpenSans-ExtraBold.ttf'),
        'Open Sans ExtraBoldItalic': require('./assets/fonts/OpenSans-ExtraBoldItalic.ttf'),
      })
    ]);
  };

  _handleLoadingError = error => {
    
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}
