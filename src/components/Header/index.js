import React from "react";
import { View, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
import { useNavigation } from "@react-navigation/native";

import { Icon } from "../index";
import style from "./style";

const Header = ({ type = "clear", onBack }) => {
  const navigation = useNavigation();
  const onBackPress = () => {
    if (onBack) {
      onBack();
    } else {
      navigation.goBack();
    }
  };
  if (type === "logo") {
    return (
      <View style={style.logo}>
        <Icon type={"logo"} width={128} color={"#ffffff"} height={42} />
      </View>
    );
  } else if (type === "back") {
    return (
      <TouchableOpacity onPress={onBackPress} style={style.button}>
        <Icon type={"left"} width={30} color={"#ffffff"} height={30} />
      </TouchableOpacity>
    );
  } else {
    return <View style={style.button}></View>;
  }
};

Header.propTypes = {
  type: PropTypes.oneOf(["clear", "back", "logo"]),
  onBack: PropTypes.func,
};

export default Header;
