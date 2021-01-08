import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { screens, assets, wrappers } from "../../const";
import style from "./style";

const Category = ({ id, name, feature }) => {
  const navigation = useNavigation();

  const openProduct = () => {
    navigation.navigate(
      wrappers.Dinner, {
        screen: screens.Products,
        params: { id: id }
      }
    );
  }

  return (
    <TouchableOpacity style={style.wrapper} onPress={openProduct}>
      <View style={style.imageWrapper}>
        <Image source={{ uri: `${assets}${feature}` }} style={style.image} />
      </View>
      <View style={style.content}>
        <Text style={style.title}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default Category;