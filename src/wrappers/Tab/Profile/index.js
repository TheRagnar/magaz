import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../../../components";
import { screens, bs } from "../../../const";
import { ProfileScreen, FavScreen, HistoryScreen } from "../../../screens";

const Stack = createStackNavigator(); 

const ProfileWrapper = ({ navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Profile}
        component={ProfileScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header/>,
          headerRight: () => <Header/>,
        }}
      />
      <Stack.Screen
        name={screens.Fav}
        component={FavScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Profile)}}/>,
          headerRight: () => <Header/>,
        }}
      />
      <Stack.Screen
        name={screens.History}
        component={HistoryScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Profile)}}/>,
          headerRight: () => <Header/>,
        }}
      />
    </Stack.Navigator>
  );
};
export default ProfileWrapper;