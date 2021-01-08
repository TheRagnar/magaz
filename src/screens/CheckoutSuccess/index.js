import React from "react";
import { View, Text } from "react-native";
import { bs, screens, st, wrappers } from "../../const";

import style from "./style";
import { Button, Icon } from "../../components"
import { connect } from "react-redux";

const CheckoutSuccess = ({lang, navigation}) => {
  return (
    <View style={[bs.wrapper, style.wrapper]}>
      <View style={style.wrp}>
        <View style={style.icon}><Icon type={`tock-ok`} width={120} height={120} color={st.primaryColor}/></View>
        <View style={style.content}>
          {/* TODO */}
          <Text style={style.title}>{`Заказ оформлен`}</Text>
          {/*<Text style={style.text}></Text>*/}
        </View>
        <View style={style.footer}>
          <Button text={lang['checkout.payment.buttons.back_to_main.text']} onPress={()=>{navigation.navigate(wrappers.Home, {screen: screens.Home})}}/>
        </View>
      </View>
    </View>
  )
}

const mapStateToProps = (state) =>{
  return {
    lang: state.lang.data
  }
}

export default connect(mapStateToProps, null)(CheckoutSuccess);