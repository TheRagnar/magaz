import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../../../components";
import { screens, bs } from "../../../const";
import { HomeScreen, PopularScreen } from "../../../screens";

const Stack = createStackNavigator(); 

const HomeWrapper = ({navigation}) => {
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

      <Stack.Screen
        name={screens.Popular}
        component={PopularScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Home)}}/>,
          headerRight: () => <Header/>,
        }}
      />
    </Stack.Navigator>
  );
};
export default HomeWrapper;