import React from "react";
import { View, Text } from "react-native";

import { bs } from "../../const";
import { ProductsContainer } from "../../containers";

const Products = ({ route }) => {

  return (
    <View style={[bs.wrapper, {flex: 1}]}>
      <ProductsContainer id={route.params.id}/>
    </View>
  )
}

export default Products;