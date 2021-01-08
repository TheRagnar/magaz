import React, {useEffect} from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Loader } from "./components";

import { getStaticFields } from "./store/lang";

import MainWrapper from "./wrappers";
//import CheckoutView from "./screens/CheckoutView";

const NavigationWrapper = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.currentLang);

  useEffect(() => {
    dispatch(getStaticFields(currentLang))
  }, [currentLang])

  return Object.keys(lang).length > 0 ? (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-300}
      style={{ flex: 1 }}
      behavior="height"
    >
      <MainWrapper />
    </KeyboardAvoidingView>
  ) : (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Loader />
      </View>
    );
};

export default NavigationWrapper;
