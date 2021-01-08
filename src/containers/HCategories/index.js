import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import style from "./style";
import { hCategoriesGet } from "../../store/hCategories";
import { Loader, Button } from "../../components";
import { screens, wrappers } from "../../const";
import { Category } from "../../blocks";

const HCategories = ({ currentLang, lang, categories, isFetching, error, hCategoriesGetAction }) => {
  const navigation = useNavigation();

  useEffect(() => {
    if(!categories || categories.length <= 0) {
      hCategoriesGetAction(currentLang)
    }
  }, [])

  const openCategories = () => {
    navigation.navigate(
      wrappers.Dinner, {
        screen: screens.Dinner
      }
    );
  }

  return (
    <View style={style.wrapper}>
      {isFetching ? (
        <Loader />
      ) : categories.map((item, key) => (
        <View style={style.item} key={key}>
          <Category {...item} />
        </View>
      ))}
      <View style={style.button}>
        <Button onPress={openCategories} text={lang['main.categories.button.text']} />
      </View>
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    currentLang: state.lang.currentLang,
    lang: state.lang.data,
    categories: state.hCategories.categories,
    isFetching: state.hCategories.isFetching,
    error: state.hCategories.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hCategoriesGetAction: (currentLang) => {
      dispatch(hCategoriesGet(currentLang));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HCategories);