import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { connect } from "react-redux";

import {
  categoriesGet,
  categoriesRefresh,
} from "../../store/categories";
import style from "./style";

import { Loader } from "../../components";
import { bs } from "../../const";
import { Category } from "../../blocks";

const Categories = ({
  lang,
  currentLang,
  isFetching,
  isRefreshing,
  error,
  categories,
  paginate,
  categoriesGetAction,
  categoriesRefreshAction,
}) => {

  useEffect(() => {
    if(!categories || categories.length <= 0) {
      categoriesGetAction(currentLang, paginate ? paginate.current_page : 1);
    }
  }, []);

  const renderItem = ({ item }) => (
    <View style={style.item}>
      <Category {...item} />
    </View>
  )

  const renderLoader = () => {
    return isFetching ? <Loader /> : null
  }

  const renderClear = () => (
    <View style={style.clear}>
    </View>
  )

  const renderHeader = () => (
    <View style={style.header}>
      <Text style={style.headerTitle}>{lang['categories.all']}</Text>
    </View>
  )

  const onRefresh = () => {
    categoriesRefreshAction(currentLang)
  }

  const onLoadMore = () => {
    if(paginate.current_page < paginate.last_page) {
      if(!isFetching) {
        categoriesGetAction(currentLang, paginate.current_page + 1);
      }
    }
  }

  return (
    <View style={style.wrapper}>
      <FlatList
        style={style.lists}
        data={categories}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={renderClear}
        ListHeaderComponent={renderHeader}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    isFetching: state.categories.isFetching,
    isRefreshing: state.categories.isRefreshing,
    error: state.categories.error,
    categories: state.categories.categories,
    paginate: state.categories.paginate,
    isRefreshing: state.categories.isRefreshing,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    categoriesGetAction: (currentLang, page) => {
      dispatch(categoriesGet(currentLang, page));
    },
    categoriesRefreshAction: (currentLang) => {
      dispatch(categoriesRefresh(currentLang));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
