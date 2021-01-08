import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

import style from "./style";
import { bs, pixelRatio } from "../../const";
import { HProducts, HCategories } from "../../containers";

const Home = () => {
  return (
    <ScrollView style={bs.wrapper}>
      <View style={style.banners}>
        <View style={style.banner}>
          <Image source={require("../../../assets/banner1.png")} style={[style.bannerImage, pixelRatio(330, 138, 40)]}/>
        </View>
        <View style={style.banner}>
          <Image source={require("../../../assets/banner2.png")} style={[style.bannerImage, pixelRatio(330, 88, 40)]}/>
        </View>
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