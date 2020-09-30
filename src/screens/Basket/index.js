import React from 'react';
import { Image, View, Text } from 'react-native';


import Button from '../../components/Button'

import BasketStyle from './style';

const Basket = ({}) => {
  return (
    <View style={BasketStyle.wrapper}>
      <View style={BasketStyle.clear}>
        <Image style={BasketStyle.image} source={require('../../assets/images/basket.png')}/> 
        <Text style={BasketStyle.title}>Ваша корзину пуста</Text>
        <Text style={BasketStyle.text}>Перейдите в каталог, выберите подходящий товар и нажмите “Добавить в корзину”</Text>
        <View style={BasketStyle.button}>
          <Button type="double">Перейти в каталог товаров</Button>
        </View>
      </View>
    </View>
  )
}

export default Basket;