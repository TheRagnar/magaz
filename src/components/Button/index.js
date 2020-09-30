import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import ButtonStyle from './style';

const Button = (props) => {
  let styleButton, styleText;
  switch(props.type) {
    case 'white': {
      styleButton = ButtonStyle.white;
      styleText = ButtonStyle.whiteText
      break;
    }
    case 'double': {
      styleButton = ButtonStyle.double;
      styleText = ButtonStyle.doubleText
      break;
    }
    case 'primary': {
      styleButton = ButtonStyle.primary;
      styleText = ButtonStyle.primaryText
      break;
    }
    default: {
      styleText = ButtonStyle.whiteText
      styleButton = ButtonStyle.white;
    }
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styleButton}>
        <Text style={styleText}>{props.children}</Text>
      </View>
    </TouchableOpacity>
  );
}
export default Button;