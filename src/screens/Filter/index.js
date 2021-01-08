import React, { useState } from "react";
import { View, TouchableOpacity, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import { bs } from "../../const";
import style from "./style";
import { FOptions, FCategories } from "../../containers";
import { Icon, Button } from "../../components";
import { setFilterOptions } from "../../store/filter";

const Filter = ({ route, lang, navigation, optionsDefault, setFilterOptionsAction }) => {

  const transformDefaultToOptions = () => {
    if(optionsDefault) {
      let newOptions = [];
      for (let optionKey in optionsDefault) {
        optionsDefault[optionKey].forEach(item => {
          newOptions.push({
            id: item,
            option_id: optionKey
          })
        })
      }
      return newOptions;
    } else {
      return []
    }
  }

  const [selectOptions, setSelectOptions] = useState(transformDefaultToOptions());  

  const onBack = () => {
    navigation.goBack()
  }

  const onClearFilter = () => {
    setSelectOptions([])
  }
  const onToggleOption = (value) => {
    let isRemove = false;
    let newOptions = selectOptions.filter((item) => {
      if(item.id === value.id) {
        isRemove = true;
        return false;
      } else {
        return true;
      }
    });
    if(!isRemove) {
      newOptions.push(value);
    }
    setSelectOptions(newOptions);
  }

  const onAcceptFilter = () => {
    setFilterOptionsAction(selectOptions);
    navigation.goBack()
  }

  return (
    <ScrollView style={[bs.wrapper, bs.wrapperFilter, style.wrapper]}>
      <View style={style.header}>
        <Text style={style.headerTitle}>{lang['filter.not_select.text']}</Text>
        <TouchableOpacity style={style.close} onPress={onBack}>
          <Icon type={`close`} />
        </TouchableOpacity>
      </View>
      <FCategories id={route.params.id} />
      <FOptions id={route.params.id} selectOptions={selectOptions} onToggle={onToggleOption} selectOptions={selectOptions}/>
      <View style={style.footer}>
        <View style={style.button}><Button onPress={onAcceptFilter} text={lang['filter.buttons.accept.text']} /></View>
        <View style={style.button}>
          <TouchableOpacity style={style.btn} onPress={onClearFilter}>
            <Text style={style.btnText}>{lang['filter.buttons.reset.text']}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = state => {
  return {
    lang: state.lang.data,
    optionsDefault: state.filter.options
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterOptionsAction: (options) => {
      dispatch(setFilterOptions(options))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);