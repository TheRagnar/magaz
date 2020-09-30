import React from 'react';
import { View } from 'react-native';

import Button from './components/Button';
import BaseStyle from './styles/Base';

const Links = ({ navigation }) => {
  return (
    <View style={BaseStyle.wrapper}>
      <View style={{ margin: 20}}>
        <Button type='primary' onPress={() => { navigation.navigate('LoginScreen') }}>Логин скрин</Button>
      </View>
      <View style={{ margin: 20}}>
        <Button type='primary' onPress={() => { navigation.navigate('RegisterScreen') }}>Скрин регистрации</Button>
      </View>
      <View style={{ margin: 20}}>
        <Button type='primary' onPress={() => { navigation.navigate('GUIScreen') }}>Скрин компонентов</Button>
      </View>
      <View style={{ margin: 20}}>
        <Button type='primary' onPress={() => { navigation.navigate('BasketScreen') }}>Скрин пустой корзины</Button>
      </View>
    </View>
  )
}

export default Links;