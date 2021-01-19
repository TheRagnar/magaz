import React, { useEffect, useRef } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

import style from "./style";
import { hProductsGet } from "../../store/hProducts";
import { Loader, Slider } from "../../components";
import { GridProduct } from "../../blocks";
import { isIpad } from "../../const";

const HProducts = ({ currentLang, lang, products, isFetching, error, hProductsGetAction }) => {
  const sl = useRef();

  useEffect(() => {
    hProductsGetAction(currentLang)
  }, [])


  return (
    <View style={style.wrapper}>
      <Text style={style.title}>{lang['main.popular.header']}</Text>
      {products.length > 0 && (
        <Slider itemWidth={isIpad ? 320 : 200} margin={10}>
          {products.map((item, key) => {
            return (<GridProduct key={key} id={item.id} priceDiscount={item.price_without_discount} name={item.name} feature={item.feature} price={item.price} />)
          })}
        </Slider>
      )}

    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    currentLang: state.lang.currentLang,
    lang: state.lang.data,
    products: state.hProducts.products,
    isFetching: state.hProducts.isFetching,
    error: state.hProducts.error
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    hProductsGetAction: (currentLang) => {
      dispatch(hProductsGet(currentLang));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HProducts);