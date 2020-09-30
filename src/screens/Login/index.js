import React from 'react';
import { Image, View, Text } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import BaseStyle from '../../styles/Base';
import LoginStyle from './style';

const Login = ({}) => {
  return (
    <View style={LoginStyle.wrapper}>
      <Text style={LoginStyle.title}>Авторизация</Text>
      <Text style={LoginStyle.text}>Для доступа к личному кабинету, вам необходимо войти в аккаунт</Text>
      <View style={LoginStyle.form}>
        <View style={LoginStyle.input}><Input placeholder='Ваш логин' /></View>
        <View style={LoginStyle.input}><Input placeholder='Ваш пароль' /></View>
        <Text style={LoginStyle.link}>Забыли пароль?</Text>
      </View>
      <View style={LoginStyle.button}>
        <Button type="primary">Войти</Button>
      </View>
      <Text style={LoginStyle.pre}>Нет аккаунта? <Text style={LoginStyle.preLink}>Создайте его</Text></Text>
      <View style={LoginStyle.footer}>
        <Image style={LoginStyle.logo} source={require('../../assets/images/logo.png')}/>
      </View>
    </View>
  )
}

export default Login;