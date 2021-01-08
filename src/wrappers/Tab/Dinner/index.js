import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Header } from "../../../components";
import { screens, bs } from "../../../const";
import { CategoriesScreen, ProductsScreen } from "../../../screens";

const Stack = createStackNavigator(); 

const DinnerWrapper = ({ navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={screens.Categories}
        component={CategoriesScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header/>,
          headerRight: () => <Header/>,
        }}
      />
      <Stack.Screen
        name={screens.Products}
        component={ProductsScreen}
        options={{
          unmountOnBlur: true,
          headerStyle: bs.header,
          headerTitle: () => <Header type={"logo"} />,
          headerLeft: () => <Header type={"back"} onBack={()=>{navigation.navigate(screens.Categories)}}/>,
          headerRight: () => <Header/>,
        }}
      />
    </Stack.Navigator>
  );
};
export default DinnerWrapper;