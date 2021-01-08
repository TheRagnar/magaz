import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import style from './style';
import { Icon } from "../index";

const Checkbox = ({ selected, text, onPress, colors }) => {

  if (colors) {
    return (
      <TouchableOpacity style={[style.box, { backgroundColor: text }]} onPress={onPress}>
        {selected && (<View style={style.boxHover}></View>)}
      </TouchableOpacity>
    )
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={style.wrapper}>
        <View style={style.box}>
          {selected && (
            <Icon type={`check`}/>
          )}
        </View>
        <Text style={[style.text, selected && style.textSelected]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default Checkbox;