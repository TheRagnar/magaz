import React from "react";
import { View, Text } from "react-native";

import { bs } from "../../const";
import { Categories } from "../../containers";

const Dinner = () => {
  return (
    <View style={[bs.wrapper, {flex: 1}]}>
      <Categories/>
    </View>
  )
}

export default Dinner