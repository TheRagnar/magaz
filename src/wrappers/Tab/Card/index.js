import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../../../components";
import { screens, bs } from "../../../const";
import { CardScreen, CheckoutScreen, CheckoutViewScreen, CheckoutSuccessScreen } from "../../../screens";

const Stack = createStackNavigator(); 

const CardWrapper = ({navigation}) => {
  return (
    <Stack.Navigator screenOptions={{
      unmountOnBlur: true,
    }}>
      <Stack.Screen
        name={screens.Card}
        component={CardScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header/>,
          headerRight: () => <Header/>,
        }}

      />
      <Stack.Screen
        name={screens.Checkout}
        component={CheckoutScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Card)}}/>,
          headerRight: () => <Header/>,
        }}
      />
      <Stack.Screen
        name={screens.CheckoutView}
        component={CheckoutViewScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Card)}}/>,
          headerRight: () => <Header/>,
        }}
      />
      <Stack.Screen
        name={screens.CheckoutSuccess}
        component={CheckoutSuccessScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Card)}}/>,
          headerRight: () => <Header/>,
        }}
      />


    </Stack.Navigator>
  );
};
export default CardWrapper;