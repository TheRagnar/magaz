import React from 'react';

import {View, Image} from 'react-native'
import HeaderStyle from './style';

const Header = (props) => {
  return (
    <View style={HeaderStyle.wrapper}>
      <Image style={HeaderStyle.image} source={require('../../assets/images/logo.png')} />
    </View>
  )
}
export default Header;