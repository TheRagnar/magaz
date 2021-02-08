import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import style from "./style";
import { bs, pixelRatio } from "../../const";
import { HProducts, HCategories } from "../../containers";
import { TouchableOpacity } from "react-native-gesture-handler";
import { screens } from "../../const"
const Home = ({ navigation }) => {
  return (
    <ScrollView style={bs.wrapper}>
      <View style={style.banners}>
        <View style={style.banner}>
          <Image source={require("../../../assets/ban1.png")} style={[style.bannerImage, pixelRatio(330, 138, 40)]}/>
        </View>
        <TouchableOpacity onPress={()=>{navigation.navigate(screens.Popular)}} style={style.banner}>
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

export default Home;