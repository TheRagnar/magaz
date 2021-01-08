import React from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Icon } from "../../components";
import { st } from "../../const";

import style from "./style";

const TopMessage = ({ status, text, onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress} style={style.wrp}>
      <View style={style.wrapper}>
        <View style={style.icon}>
          <Icon type={`tick`} width={58} height={58} color={st.primaryColor}/>
        </View>
        <Text style={style.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  )
}

export default TopMessage;