import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Icon } from "../../components";
import { bs } from "../../const";

import style from "./style";

const SelectLang = ({ lang, currentLang, onClose, onSelect }) => {
  return (
    <View style={style.wrapper}>
      <View style={style.header}>
        <Text style={style.title}>{lang['language.header']}</Text>
        <TouchableOpacity onPress={onClose} style={style.iconClose}>
          <Icon type={`close`} width={26} height={26} />
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <TouchableOpacity onPress={()=>{onSelect('ru')}} style={[style.item, currentLang === 'ru' && style.itemActive]}>
          <Text style={[style.itemText, currentLang === 'ru' && style.itemTextActive]}>{lang['language.ru']}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onSelect('en')}} style={[style.item, currentLang === 'en' && style.itemActive]}>
          <Text style={[style.itemText, currentLang === 'en' && style.itemTextActive]}>{lang['language.en']}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onSelect('kz')}} style={[style.item, currentLang === 'kz' && style.itemActive]}>
          <Text style={[style.itemText, currentLang === 'kz' && style.itemTextActive]}>{lang['language.kz']}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SelectLang;