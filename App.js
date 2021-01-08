import AppLoading from 'expo-app-loading';
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { StatusBar } from "react-native";
import NavigationWrapper from "./src";
import { store, persistor } from "./src/store/createStore";

const app = (props) => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
        onError={handleLoadingError}
      />
    );
  } else {
    return (
      <Provider store={store}>
        <StatusBar
          translucent={true}
          backgroundColor={"transparent"}
          barStyle="light-content"
        />
        <PersistGate loading={null} persistor={persistor}>
          <NavigationWrapper />
        </PersistGate>
      </Provider>
    );
  }
};
async function loadResourcesAsync() {
  await Promise.all([
    //Asset.loadAsync([]),
    Font.loadAsync({
      // This is the font that we are using for our tab bar
      // We include SpaceMono because we use it in HomeScreen.js. Feel free to
      // remove this if you are not using it in your app
      "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
      "roboto-medium": require("./assets/fonts/Roboto-Medium.ttf"),
      "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf"),
      "roboto-black": require("./assets/fonts/Roboto-Black.ttf"),
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
