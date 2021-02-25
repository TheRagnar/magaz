import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { useNavigation } from '@react-navigation/native';

import {
  productsGet,
  productsRefresh,
} from "../../store/popular";
import style from "./style";

import { Loader, Icon, Button } from "../../components";
import { bs, screens, st, wrappers } from "../../const";
import { CardProduct } from "../../blocks";

const Products = ({
  lang,
  currentLang,
  isFetching,
  isRefreshing,
  error,
  products,
  paginate,
  productsGetAction,
  productsRefreshAction,
}) => {
  const [keyword, setKeyword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    productsGetAction(currentLang, paginate ? paginate.current_page : 1, generateQuery());
  }, []);

  useEffect(() => {
    productsRefreshAction(currentLang, generateQuery());
  }, []);

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

  const onAcceptKeyword = () => {
    setFilterKeywordAction(keyword)
  }

  const renderHeader = () => (
    <View style={style.headerList}>
      <Text style={style.tox}>{lang['main.popular.header']}</Text>
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
    let str = "";
    str += `&order.views.desc`
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
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={renderClear}
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
    isFetching: state.popular.isFetching,
    isRefreshing: state.popular.isRefreshing,
    error: state.popular.error,
    products: state.popular.products,
    paginate: state.popular.paginate,
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
