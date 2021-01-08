import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import style from "./style";
import PropTypes from 'prop-types';


const Button = ({ text, onPress, type, status, isLoad }) => {
  return (
    <TouchableOpacity pointerEvents={isLoad ? `none` : `auto`} style={[style.wrapper, style[`type-${type}`], style[`wrapper-status-${status}`], isLoad && style.wrapperIsLoad]} onPress={status === "normal" ? onPress : false}>
      {!isLoad ? <Text style={[style.text, style[`text-${type}`], style[`text-status-${status}`]]}>{text}</Text> : <ActivityIndicator size="large" color="rgba(30, 66, 160, 0.9)" />}
    </TouchableOpacity>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  type: PropTypes.oneOf(["secondary", "white", "double"]),
  status: PropTypes.oneOf(["normal", "disabled"]),
  isLoad: PropTypes.bool
}
Button.defaultProps = {
  type: "secondary",
  status: "normal"
}


export default Button;