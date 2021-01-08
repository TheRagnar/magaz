import React from "react";
import {
  View,
  Text,
  TouchableHighlight,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

import { screens, assets, st } from "../../const";
import style from "./style";

const GridProduct = ({ id, name, feature, price, stock_balance, priceDiscount }) => {
  const lang = useSelector((state) => state.lang.data);
  const navigation = useNavigation();

  const openProduct = () => {
    navigation.navigate(screens.Product, { id: id });
  };

  return (
    <TouchableHighlight
      activeOpacity={.9}
      underlayColor={st.primaryColor}
      onPress={openProduct}
      style={style.wrapper}
    >
      <View style={style.wrapper}>
        <View style={style.imageWrapper}>
          <Image source={{ uri: `${assets}${feature}` }} style={style.image} />
        </View>
        <View style={style.content}>
          <Text style={style.name}>{name}</Text>
          <View style={style.ft}>
          <Text style={style.price}>{price} {lang["currency.tenge"]}</Text>
            {priceDiscount && (<Text style={style.priceDiscount}>{priceDiscount} {lang["currency.tenge"]}</Text>)}
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default GridProduct;
