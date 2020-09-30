import React from 'react';
import { Image, View, Text } from 'react-native';

import Input from '../../components/Input'
import Button from '../../components/Button'

import BaseStyle from '../../styles/Base';
import LoginStyle from './style';

const Register = ({ }) => {
  return (
    <View style={LoginStyle.wrapper}>
      <Text style={LoginStyle.title}>Регистрация</Text>
      <View style={LoginStyle.form}>
        <View style={LoginStyle.input}><Input placeholder='Ваш email' /></View>
        <View style={LoginStyle.input}><Input placeholder='Ваш пароль' /></View>
      </View>
      <View style={LoginStyle.button}>
        <Button type="primary">Создать аккаунт</Button>
      </View>
      <Text style={LoginStyle.whiteText}>Нажимая “Создать аккаунт”, вы соглашаетесь с условиями сервиса</Text>
      <View style={LoginStyle.footer}>
        <Image style={LoginStyle.logo} source={require('../../assets/images/logo.png')} />
      </View>
    </View>
  )
}

export default Register;