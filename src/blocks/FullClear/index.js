import React from "react";
import { View, Text } from "react-native";
import { Button, Icon } from "../../components";
import { useSelector } from "react-redux";

import { screens, st } from "../../const";
import { useNavigation } from '@react-navigation/native';


import style from "./style";

const FullClear = () => {
  const lang = useSelector(state => state.lang.data);
  const navigation = useNavigation();

  return (
    <View style={style.wrapper}>
      <View style={style.icon}>
        <Icon type={`problem`} width={120} height={120} color={st.primaryColor}/>
      </View>
      <View style={style.content}>
        <Text style={style.title}>{lang['autorization.not_auth']}</Text>
        <Text style={style.text}>{lang['autorization.need_auth']}</Text>
      </View>
      <View style={style.footer}>
        <View style={style.button}><Button text={lang['autorization.header']} onPress={()=>{navigation.navigate(screens.Auth)}}/></View>
        <View style={style.button}><Button type={`white`} text={lang['registation.header']} onPress={()=>{navigation.navigate(screens.Reg)}}/></View>
      </View>
    </View>
  )
}

export default FullClear;