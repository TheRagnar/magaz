import React from "react";
import { View, Text } from "react-native";

import { bs } from "../../const";
import { ProductsContainerPopular } from "../../containers";

const Popular = ({ route }) => {

  return (
    <View style={[bs.wrapper, {flex: 1}]}>
      <ProductsContainerPopular/>
    </View>
  )
}

export default Popular;