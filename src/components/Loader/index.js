import React from "react";
import { View, ActivityIndicator } from "react-native";
import style from "./style";

const Loader = () => {
  return (
    <View style={style.wrapper}>
      <ActivityIndicator size="large" color="rgba(30, 66, 160, 0.9)" />
    </View>
  )
}

export default Loader;