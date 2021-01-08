import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import { screens, assets } from "../../const";
import style from "../CardProduct/style";

const CardProduct = ({ id, name, feature, price }) => {
  const lang = useSelector(state => state.lang.data);

  return (
    <View style={style.wrapper}>
      <View style={style.imageWrapper}>
        <Image source={{ uri: `${assets}${feature}` }} style={style.image} />
      </View>
      <View style={style.content}>
        <Text style={style.title}>{name}</Text>
        <Text style={style.price}>{price} {lang['currency.tenge']}</Text>
      </View>
    </View>
  )
}

export default CardProduct;