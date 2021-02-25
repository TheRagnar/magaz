import React from "react";
import {Image, ScrollView, View} from "react-native";

import style from "./style";
import {bs, pixelRatio, screens, wrappers} from "../../const";
import {HCategories, HProducts} from "../../containers";
import {TouchableOpacity} from "react-native-gesture-handler";

import {connect} from "react-redux";

const Home = ({navigation, lang}) => {
  return (
    <ScrollView style={bs.wrapper}>
      <View style={style.banners}>
        <View style={style.banner}>
          <Image source={require("../../../assets/ban1.png")} style={[style.bannerImage, pixelRatio(330, 138, 40)]}/>
        </View>
        <TouchableOpacity onPress={() => {
          navigation.navigate(
            wrappers.Dinner, {
              screen: screens.Products,
              params: { id: lang['main.popular.category'] }
            }
          );
        }} style={style.banner}>
          <Image source={require("../../../assets/ban2.png")} style={[style.bannerImage, pixelRatio(330, 88, 40)]}/>
        </TouchableOpacity>
      </View>
      <View style={style.products}>
        <HProducts/>
      </View>
      <View style={style.categories}>
        <HCategories/>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
  }
}

export default connect(mapStateToProps, null)(Home);