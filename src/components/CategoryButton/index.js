import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import CategoryButtonStyle from './style';

const CategoryButton = (props) => {
  

  const icon = props.type && (
    <View style={CategoryButtonStyle.iconBox}>
      <Image source={require(`../../assets/images/cat_${props.type}.png`)} style={CategoryButtonStyle.icon} />
    </View>
  )

  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={CategoryButtonStyle.box}>
        {icon}
        <Text style={CategoryButtonStyle.text}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default CategoryButton;