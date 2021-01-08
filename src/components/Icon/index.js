import React from "react";
import { View } from "react-native";
import PropTypes from 'prop-types';

import icons from "./svg";

const Icon = ({ type, color, width = 28, height = 28 }) => {
  return (
    <View style={{
      width: width || 28,
      height: height || 28,
    }}>
      {icons(color)[type]}
    </View>
  )
}

Icon.propTypes = {
  type: PropTypes.oneOf(Object.keys(icons())).isRequired,
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export default Icon;