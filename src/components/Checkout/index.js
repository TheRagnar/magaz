import React from 'react';
import { View, Text, Image } from 'react-native';

import CheckoutStyle from './style';

const Checkout = ({ title, date }) => {
  return (
    <View style={CheckoutStyle.box}>
      <View style={CheckoutStyle.content}>
        <Text style={CheckoutStyle.title}>{title}</Text>
        <Text style={CheckoutStyle.date}>{date}</Text>
      </View>
      <View style={CheckoutStyle.more}>
        <Image style={CheckoutStyle.icon} source={require('../../assets/images/more.png')} />
      </View>
    </View>
  );
}
export default Checkout;