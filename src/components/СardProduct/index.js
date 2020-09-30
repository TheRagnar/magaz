import React from 'react';
import { View, Text, Image } from 'react-native';

import CardProductStyle from './style';

const СardProduct = ({ image, title, price, hasControl, count, notAvailable }) => {
  return (
    <View style={CardProductStyle.wrapper}>
      <View style={[CardProductStyle.box, notAvailable && CardProductStyle.boxNotAvailble]}>
        <View style={CardProductStyle.imageBox}>
          <Image source={require('../../assets/images/demo-tovar.png')} style={CardProductStyle.image} />
        </View>
        <View style={CardProductStyle.content}>
          <View style={CardProductStyle.title}><Text style={CardProductStyle.titleText}>{title}</Text></View>
          <View style={CardProductStyle.footer}>
            <View style={CardProductStyle.footerPrice}><Text style={CardProductStyle.priceText}>{price}</Text></View>
            {hasControl && !notAvailable && (
              <View style={CardProductStyle.footerControl}>
                <View style={CardProductStyle.button}><Text style={CardProductStyle.buttonText}>-</Text></View>
                <Text style={CardProductStyle.number}>{count}</Text>
                <View style={CardProductStyle.button}><Text style={CardProductStyle.buttonText}>+</Text></View>
              </View>
            )}
          </View>
        </View>
      </View>
      { notAvailable && (
        <View style={CardProductStyle.notAvailableBox}>
          <Text style={CardProductStyle.notAvailableText}>Товара нет в наличии</Text>
        </View>
      )}
    </View>
  );
}
export default СardProduct;