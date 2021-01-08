import React, { useEffect } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { categoriesGet } from "../../store/filerCategories";
import style from "./style";
import { Loader, Icon } from "../../components";
import { assets } from "../../const";

const FCategories = ({ id, lang, currentLang, isFetching, categories, categoriesGetAction }) => {
  useEffect(() => {
    if(!categories || categories.length <= 0) {
      categoriesGetAction(currentLang)
    }
  }, [])

  return (
    <View style={style.options}>
      {isFetching && (<Loader />)}
      {categories.length > 0 && (
        <View style={style.categories}>
          <Text style={style.categoryTitle}>{lang['filter.category']}</Text>
          {categories.map((item, key) => {
            return (
              <View key={key} style={[style.category, item.id === id && style.categoryActive]}>
                <Image source={{ uri: `${assets}${item.feature}` }} style={style.categoryIcon} />
                <Text style={[style.categoryText, item.id === id && style.categoryTextActive]}>{item.name}</Text>
              </View>
            )
          })}
        </View>
      )}
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    isFetching: state.filterCategories.isFetching,
    categories: state.filterCategories.categories,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    categoriesGetAction: (currentLang) => {
      dispatch(categoriesGet(currentLang))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FCategories);