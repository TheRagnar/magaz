import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import BaseStyle from '../../styles/Base';

import logo from '../../assets/images/logo.png';

export default class Loader extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <View style={BaseStyle.container}>
        <Image style={BaseStyle.loaderLogo} source={logo} />
      </View>
    );
  }
}