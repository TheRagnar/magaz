import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../../../components";
import { screens, bs } from "../../../const";
import { HomeScreen } from "../../../screens";

const Stack = createStackNavigator(); 

const HomeWrapper = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Home}
        component={HomeScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header/>,
          headerRight: () => <Header/>,
        }}

      />
    </Stack.Navigator>
  );
};
export default HomeWrapper;