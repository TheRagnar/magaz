import React from "react";
import { FlatList, View } from "react-native";
import style from "./style";
import PropTypes from 'prop-types';

import Loader from "../Loader";

const List = ({ data, isFetching, isRefreshing, itemTemplate, headerTemplate, clearTemplate, onLoadMore, onRefresh }) => {

  const renderItem = ({ item }) => (
    <View style={style.item}>{itemTemplate(item)}</View>
  )

  const renderLoader = () => {
    return isFetching ? <Loader/> : null
  }

  return (
    <FlatList
      style={style.lists}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      onEndReached={onLoadMore}
      onEndReachedThreshold={2}
      ListFooterComponent={renderLoader}
      ListEmptyComponent={clearTemplate}
      ListHeaderComponent={headerTemplate}
      refreshing={isRefreshing}
      onRefresh={onRefresh}
    />
  )
}

List.propTypes = {
  data: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  itemTemplate: PropTypes.element.isRequired,
  clearTemplate: PropTypes.element.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  onRefresh: PropTypes.func.isRequired,
  headerTemplate: PropTypes.element,
}

export default List;