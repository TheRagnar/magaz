import React, { useState } from "react";
import { Text, View, TextInput } from "react-native";
import style from "./style";
import PropTypes from 'prop-types';
import { TextInputMask } from "react-native-masked-text";



const Input = (props) => {
  const [focused, setFocused] = useState(props.value && props.value.length > 0);
  const onFocus = () => {
    setFocused(true);
  };
  const onBlur = () => {
    setFocused(props.value.length > 0);
  };

  const styleInput = [style.input, focused && style.inputFocused, props.label && style.inputLabeled];
  const styleLabel = [style.label, focused && style.labelFocused];

  return (
    <View style={style.wrapper}>
      {props.label && (<Text pointerEvents={`none`} style={styleLabel}>{props.label}</Text>)}
      {props.type && props.type === "phone" ? (
        <View style={style.wrppaerInput}>
          <TextInputMask type={"custom"} options={{ mask: `+7 (999) 999-99-99` }} keyboardType="phone-pad" autoCapitalize={`none`} placeholder={props.placeholder} value={props.value} style={styleInput} onChangeText={props.onChangeText} onFocus={onFocus} onBlur={onBlur} />
        </View>
      ) : (
      <View style={style.wrppaerInput}>
        <TextInput autoCapitalize={`none`} placeholder={props.placeholder} value={props.value} style={styleInput} onChangeText={props.onChangeText} onFocus={onFocus} onBlur={onBlur} {...props}/>
      </View>
      )}
    </View>
  )
}

Input.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeText: PropTypes.func
}

export default Input;