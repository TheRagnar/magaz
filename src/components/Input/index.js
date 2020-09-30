import React from 'react';
import { TextInput, Text, View, Image } from 'react-native';

import InputStyle from './style';

const Input = ({label, placeholder, onChangeText, isSearch}) => {
  return (
    <View style={InputStyle.wrapper}>
      {
        label && 
        <View style={InputStyle.label}>
          <Text style={InputStyle.labelText}>{label}</Text>
        </View>
      }
      <View style={InputStyle.inputWrapper}>
        <TextInput
          style={[InputStyle.input, isSearch && InputStyle.inputSearch]}
          placeholder={placeholder}
          onChangeText={onChangeText}
          placeholderTextColor='rgba(0,0,0,.5)'
        />
        {
          isSearch && (
            <View style={InputStyle.button}><Image style={InputStyle.buttonIcon} source={require('../../assets/images/search.png')}/></View>
          )
        }
      </View>
    </View>
  );
}

export default Input;
