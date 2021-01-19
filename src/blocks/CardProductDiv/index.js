import React from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";

import { screens, assets } from "../../const";
import style from "../CardProduct/style";

const CardProduct = ({ id, name, feature, price, price_without_discount }) => {
  const lang = useSelector(state => state.lang.data);

  return (
    <View style={style.wrapper}>
      <View style={style.imageWrapper}>
        <Image source={{ uri: `${assets}${feature}` }} style={style.image} />
      </View>
      <View style={style.content}>
        <Text style={style.title}>{name}</Text>
        <View style={style.ft}>
          <Text style={style.price}>
            {price} {lang['currency.tenge']}
          </Text>
          {price_without_discount && <Text style={style.priceDiscount}>{price_without_discount} {lang['currency.tenge']}</Text>}
        </View>
      </View>
    </View>
  )
}

export default CardProduct;