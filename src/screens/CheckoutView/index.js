import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, ActivityIndicator } from "react-native";
import { connect } from "react-redux";
import { WebView } from 'react-native-webview';

import { Button, Input } from "../../components";

import style from "./style";
import { bs } from "../../const";

const CheckoutView = ({ lang, navigation, currentLang, token, route }) => {
  //https://securepayments.sberbank.kz/payment/merchants/rbs/payment_ru.html?mdOrder=4a9d6350-c87c-77bd-91b7-eb450c96f628
  return (
    <View style={[bs.wrapper, { flex: 1,}]}>
      <WebView
        source={{
          uri: route.params.url,
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    token: state.auth.token,
    currentLang: state.lang.currentLang,
  };
};

export default connect(mapStateToProps, null)(CheckoutView);
