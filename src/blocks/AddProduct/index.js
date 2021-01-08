import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CardProductDiv } from "..";
import { Icon, Button } from "../../components";
import { bs } from "../../const";

import style from "./style";

const AddProduct = ({ product, lang, onClose, onAddCard }) => {
  const [count, setCount] = useState(1);

  return (
    <View style={style.wrapper}>
      <View style={[bs.sheetHeader, style.header]}>
        <Text style={bs.sheetTitle}>{lang['product.buttons.add_basket.text']}</Text>
        <TouchableOpacity onPress={onClose} style={bs.sheetIconClose}>
          <Icon type={`close`} width={26} height={26} />
        </TouchableOpacity>
      </View>
      <View style={style.product}>
        <CardProductDiv {...product}/>
        <View style={style.row}>
          <Text style={style.title}>{lang['basket_adding.count']}</Text>
          <View style={style.controls}>
            <TouchableOpacity style={style.btn} onPress={()=>{if(count > 1){ setCount(count-1) }}}>
              <Text style={style.btnText}>-</Text>
            </TouchableOpacity>
            <Text style={style.count}>{count}</Text>
            <TouchableOpacity style={style.btn} onPress={()=>{if(count < product.stock_balance){ setCount(count+1) }}}>
              <Text style={style.btnText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={style.row}>
          <Text style={style.title}>{lang['basket_adding.price']}</Text>
          <Text style={style.price}>{product.price*count} {lang['currency.tenge']}</Text>
        </View>
        <View style={style.button}><Button text={lang['product.buttons.add_basket.text']} onPress={()=>{onAddCard(count)}} /></View>
      </View>
    </View>
  )
}

export default AddProduct;