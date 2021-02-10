import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import {
  productsGet,
  productsRefresh,
} from "../../store/products";
import { setFilterKeyword, setFilterOptions } from "../../store/filter";
import style from "./style";

import { Loader, Icon, Button } from "../../components";
import { bs, screens, st, wrappers } from "../../const";
import { CardProduct } from "../../blocks";

const Products = ({
  id,
  lang,
  currentLang,
  isFetching,
  isRefreshing,
  error,
  products,
  paginate,
  productsGetAction,
  productsRefreshAction,
  filterOptions,
  filterKeyword,
  setFilterKeywordAction,
  setFilterOptionsAction
}) => {
  const [keyword, setKeyword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    productsGetAction(currentLang, paginate ? paginate.current_page : 1, generateQuery());
  }, []);

  useEffect(() => {
    productsRefreshAction(currentLang, generateQuery());
  }, [filterOptions, filterKeyword]);

  useEffect(()=> {
    setFilterOptionsAction([])
  }, [id])

  const renderItem = ({ item }) => (
    <View style={style.item}>
      <CardProduct {...item} />
    </View>
  )

  const renderLoader = () => {
    return isFetching ? <Loader /> : null
  }

  const renderClear = () => isFetching || isRefreshing ? null : (
    <View style={style.clear}>
      <View style={style.clearIcon}>
        <Icon type={`problem`} width={120} height={120} color={st.primaryColor}/>
      </View>
      <View style={style.clearContent}>
        <Text style={style.clearTitle}>{lang['search.not_found.header']}</Text>
        <Text style={style.clearText}>{lang['search.not_found.subheader']}</Text>
      </View>
      <View style={style.clearButton}>
        <Button type={`double`} onPress={()=>{navigation.navigate(wrappers.Dinner, { screen: screens.Categories })}} text={lang['search.not_found.button']}/>
      </View>
    </View>
  )

  const openNavigation = () => {
    navigation.navigate(screens.Filter, { id: id })
  }

  const filterLength = () => {
    return Object.keys(filterOptions).length
  }

  const onAcceptKeyword = () => {
    setFilterKeywordAction(keyword)
  }

  const renderHeader = () => (
    <View style={style.headerList}>
      <View style={style.header}>
        <TextInput placeholder={lang["search.text"]} style={style.input} value={keyword} onChangeText={text => setKeyword(text)} />
        <TouchableOpacity style={style.searchButton} onPress={onAcceptKeyword}>
          <Icon type={`search`} width={24} height={24} color={st.primaryColor} />
        </TouchableOpacity>
      </View>
      <View style={style.filter}>
        <TouchableOpacity style={style.filterButton} onPress={openNavigation}>
          <Icon type={`filter`} width={22} height={22} color={filterLength() ? st.textColor : st.grColor} />
          <Text style={[style.filterText, filterLength() ? { color: st.textColor } : { color: st.grColor }]}>{filterLength() ? lang['filter.select.text'].replace(':count', filterLength()) : lang['filter.not_select.text']}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )

  const onRefresh = () => {
    productsRefreshAction(currentLang, generateQuery())
  }

  const onLoadMore = () => {
    if (paginate.current_page < paginate.last_page) {
      if (!isFetching) {
        productsGetAction(currentLang, paginate.current_page + 1, generateQuery());
      }
    }
  }

  const generateQuery = () => {
    let str = `&has.categories.ids=${id}`;

    if(filterKeyword && filterKeyword.length >= 1) {
      str += `&search.name.like=${filterKeyword}`
    }

    if(filterOptions && filterLength()) {
      for(let optionKey in filterOptions) {
        str += `&filter.options[${optionKey}]=[${filterOptions[optionKey]}]`
      }
    }
    return str;
  }

  return (
    <View style={style.wrapper}>
      <FlatList
        style={style.lists}
        data={products}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={renderClear}
        ListHeaderComponent={renderHeader()}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{flexGrow:1}}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    isFetching: state.products.isFetching,
    isRefreshing: state.products.isRefreshing,
    error: state.products.error,
    products: state.products.products,
    paginate: state.products.paginate,
    isRefreshing: state.products.isRefreshing,
    filterOptions: state.filter.options,
    filterKeyword: state.filter.keyword
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    productsGetAction: (currentLang, page, query) => {
      dispatch(productsGet(currentLang, page, query));
    },
    productsRefreshAction: (currentLang, query) => {
      dispatch(productsRefresh(currentLang, query));
    },
    setFilterKeywordAction: (keyword) => {
      dispatch(setFilterKeyword(keyword))
    },
    setFilterOptionsAction: (options) => {
      dispatch(setFilterOptions(options))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
