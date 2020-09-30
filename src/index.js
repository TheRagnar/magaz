import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Header from './components/Header';

import GUIScreen from './screens/GUI';
import Links from './links';
import LoginScreen from './screens/Login'
import RegisterScreen from './screens/Login/Register'

import BasketScreen from './screens/Basket'

const Stack = createStackNavigator();

const NavigationWrapper = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        //headerShown: false
      }}>
        <Stack.Screen
          name="LinksScreen"
          component={Links}
          options={{ header: props => <Header {...props} /> }}
        />

        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BasketScreen"
          component={BasketScreen}
          options={{ header: props => <Header {...props} /> }}
        />
        

        <Stack.Screen
          name="GUIScreen"
          component={GUIScreen}
          options={{ header: props => <Header {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default NavigationWrapper;