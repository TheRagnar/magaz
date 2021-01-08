import React, {useEffect} from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch, useSelector } from "react-redux";
import { screens, wrappers } from "../const";

import TabWrapper from "./Tab";
import { AuthScreen, ProductScreen, FilterScreen, RegScreen } from "../screens";
import { synchronize } from "../store/cardNoAuth";
import { Loader } from "../components";

const Stack = createStackNavigator();

const Wrappers = () => {
  const authIn = useSelector((state) => state.auth.authIn);
  const currentLang = useSelector(state => state.lang.currentLang)
  const token = useSelector(state => state.auth.token)
  const isSynch = useSelector(state => state.cardNoAuth.isSynch)
  const dispatch = useDispatch();

  useEffect(() => {
    if(authIn) {
      if(!isSynch) {
        dispatch(synchronize(currentLang, token))
      }
    }
  }, [authIn])

  if (authIn) {
    if(!isSynch) {
      return <Loader/>
    }
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            unmountOnBlur: true,
          }}
        >
          <Stack.Screen name={wrappers.Tab} component={TabWrapper} />
          <Stack.Screen name={screens.Product} component={ProductScreen} />
          <Stack.Screen name={screens.Filter} component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            unmountOnBlur: true,
          }}
        >
          <Stack.Screen name={wrappers.Tab} component={TabWrapper} />
          <Stack.Screen name={screens.Product} component={ProductScreen} />
          <Stack.Screen name={screens.Filter} component={FilterScreen} />
          <Stack.Screen name={screens.Auth} component={AuthScreen} />
          <Stack.Screen name={screens.Reg} component={RegScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

export default Wrappers;
