import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Icon, Loader } from "../../components";

import { screens, assets } from "../../const";
import style from "../CardProduct/style";

const CardEdit = ({ id, name, feature, price, count, stock_balance, onAdd, onRemove, onDelete, isLoad }) => {
  const lang = useSelector(state => state.lang.data);

  return (
    <View style={style.wrapper}>
      {isLoad && (<View style={style.load}><Loader/></View>)}
      <View style={style.imageWrapper}>
        <Image source={{ uri: `${assets}${feature}` }} style={style.image} />
      </View>
      <View style={[style.content, style.contentEdit]}>
        <Text style={style.title}>{name}</Text>
        <View style={style.footer}>
          <Text style={style.price}>{price} {lang['currency.tenge']}</Text>
          <View style={style.right}>
            <View style={style.controls}>
              <TouchableOpacity style={style.btn} onPress={()=>{onRemove(id, stock_balance, count)}}>
                <Text style={style.btnText}>-</Text>
              </TouchableOpacity>
              <Text style={style.count}>{count}</Text>
              <TouchableOpacity style={style.btn} onPress={()=>{onAdd(id, stock_balance, count)}}>
                <Text style={style.btnText}>+</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={style.icon} onPress={()=>{onDelete(id, count)}}>
              <Icon type={`delete-outline`} width={24} height={24} color={"#FF2E2E"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}

export default CardEdit;