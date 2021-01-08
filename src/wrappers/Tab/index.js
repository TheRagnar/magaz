import React from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "../../components";
import { bs, wrappers, st, screens } from "../../const";

const Tab = createBottomTabNavigator();

import HomeWrapper from "./Home";
import DinnerWrapper from "./Dinner";
import CardWrapper from "./Card";
import ProfileWrapper from "./Profile";

const TabWrapper = ({navigation}) => {
  const generateOption = (iconName) => {
    return {
      tabBarLabel: "",
      unmountOnBlur: true,
      tabBarIcon: ({ focused }) => (
        <View style={st.iconPadding}><Icon type={iconName} color={focused ? st.iconColor : "rgba(71, 73, 80, 0.5)"} /></View>
      ),
    };
  };

  return (
    <Tab.Navigator
      tabBarOptions={{
        unmountOnBlur: true,
        style: bs.tabWrapper,
      }}
    >
      <Tab.Screen
        name={wrappers.Home}
        component={HomeWrapper}
        options={generateOption("home-run")}
        listeners={
          ({navigation}) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(wrappers.Home, {
                screen: screens.Home
              });
            }
          })
        }
      />
      <Tab.Screen
        name={wrappers.Dinner}
        component={DinnerWrapper}
        options={generateOption("dinner")}
        listeners={
          ({navigation}) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(wrappers.Dinner, {
                screen: screens.Categories
              });
            }
          })
        }
      />
      <Tab.Screen
        name={wrappers.Card}
        component={CardWrapper}
        options={generateOption("shopping-cart")}
        listeners={
          ({navigation}) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(wrappers.Card, {
                screen: screens.Card
              });
            }
          })
        }
      />
      <Tab.Screen
        name={wrappers.Profile}
        component={ProfileWrapper}
        options={generateOption("user")}
        listeners={
          ({navigation}) => ({
            tabPress: (event) => {
              event.preventDefault();
              navigation.navigate(wrappers.Profile, {
                screen: screens.Profile
              });
            }
          })
        }
      />
    </Tab.Navigator>
  );
};

export default TabWrapper;
