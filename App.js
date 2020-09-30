import { AppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import React, { useState } from 'react';
import NavigationWrapper from './src';

import { View } from 'react-native';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './src/store/reducers';

const store = createStore(rootReducer)


const app = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <NavigationWrapper />
      </Provider>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([
    ]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      'roboto-regular': require('./src/assets/fonts/Roboto-Regular.ttf'),
      'roboto-medium': require('./src/assets/fonts/Roboto-Medium.ttf'),
      'roboto-bold': require('./src/assets/fonts/Roboto-Bold.ttf'),
      'roboto-black': require('./src/assets/fonts/Roboto-Black.ttf'),
    }),
  ]);
}

function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}


export default app;