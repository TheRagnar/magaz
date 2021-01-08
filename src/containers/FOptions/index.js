import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { optionsGet } from "../../store/filterOptions";
import style from "./style";
import { Checkbox, Loader } from "../../components";

const FOptions = ({ id, selectOptions, onToggle, lang, currentLang, isFetching, options, optionsGetAction }) => {

  useEffect(() => {
    if(!options || options.length <= 0) {
      optionsGetAction(currentLang, id)
    }
  }, [])

  const isSelected = (value) => {
    return selectOptions.some((item) => item.id === value.id)
  }

  return (
    <View style={style.options}>
      {isFetching && (<Loader />)}
      {options.length > 0 && options.map((option, optionKey) => (
        <View key={optionKey} style={style.categories}>
          <Text style={style.categoryTitle}>{option.name}</Text>
          <View style={[style.categoryRow, option.type === 2 && style.categoryRowColor]}>
            {option.values.map((value, valueKey) =>
              (<View key={valueKey} style={[style.category, option.type === 2 && style.categoryColor]}>
                <Checkbox colors={option.type === 2} text={value.name} selected={isSelected(value)} onPress={() => { onToggle(value) }} />
              </View>)
            )}
          </View>
        </View>
      ))}
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    isFetching: state.filterOptions.isFetching,
    options: state.filterOptions.options,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    optionsGetAction: (currentLang, id) => {
      dispatch(optionsGet(currentLang, id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FOptions);