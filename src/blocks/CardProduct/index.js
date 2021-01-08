import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import { screens, assets } from "../../const";
import style from "./style";
import { Icon } from "../../components";

const CardProduct = ({ id, name, feature, price, onDelete, price_without_discount }) => {
  const lang = useSelector(state => state.lang.data);
  const navigation = useNavigation();

  const openProduct = () => {
    navigation.navigate(screens.Product, { id: id });
  }

  return (
    <TouchableOpacity style={style.wrapper} onPress={openProduct}>
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
      {onDelete && (
        <TouchableOpacity onPress={()=>{onDelete(id)}} style={style.delete}>
          <Icon type={`delete-outline`} width={24} height={24} color={"#FF2E2E"}/>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  )
}

export default CardProduct;