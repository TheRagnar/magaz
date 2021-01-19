import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, Image, ScrollView, Animated, Modal } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import useScroll from "../../hooks/useScroll";
import Lightbox from 'react-native-lightbox';

import style from "./style";
import { Icon, Button, Loader } from "../../components";
import { st, assets, bs, isIpad } from "../../const";
import { apiProduct, apiFav, apiBasket } from "../../api";
import { ProductOptions, Comments, TopMessage, AddProduct } from "../../blocks";
import { addProduct } from "../../store/cardNoAuth";

import ImageViewer from 'react-native-image-zoom-viewer';


const Product = ({ route, lang, currentLang, token, navigation, addProductAuth }) => {
  const refRBSheet = useRef();
  const { scroll, scrollTop } = useScroll();

  const [productInfo, setProductInfo] = useState(false);
  const [textTopMessage, setTextTopMessage] = useState(false);

  useEffect(() => {
    fetchData();
  }, [route.params.id])

  const onBack = () => {
    navigation.goBack()
  };

  useEffect(() => {
    if (textTopMessage) {
      setTimeout(() => {
        setTextTopMessage(false);
      }, 3000)
    }
  }, [textTopMessage])

  const onAddFav = () => {
    if (!productInfo.is_favorite) {
      apiFav.addFav(currentLang, token, route.params.id).then(res => {
        if (res.data.operation.code === 200) {
          setProductInfo({
            ...productInfo,
            is_favorite: true
          })
          setTextTopMessage(res.data.operation.message)
          scrollTop()
        } else {
          console.warn(res.data.operation.message)
        }
      }).catch(error => {
        console.warn(error)
      })
    } else {
      apiFav.deleteFav(currentLang, token, route.params.id).then(res => {
        if (res.data.operation.code === 200) {
          setProductInfo({
            ...productInfo,
            is_favorite: false
          })
          setTextTopMessage(res.data.operation.message)
          scrollTop()
        } else {
          console.warn(res.data.operation.message)
        }
      }).catch(error => {
        console.warn(error)
      })
    }
  }

  const onAddCard = () => {
    refRBSheet.current.open()
  }

  const fetchData = () => {
    apiProduct.getProduct(currentLang, route.params.id, token).then(res => {
      console.log(res.data.data.item)
      setProductInfo(res.data.data.item)
    })
  }


  const onAddCardHandler = (conut) => {
    if (token) {
      apiBasket.addCard(currentLang, token, route.params.id, conut).then(res => {
        if (res.data.operation.code === 200) {
          setTextTopMessage(res.data.operation.message)
          refRBSheet.current.close()
          scrollTop()
        } else {
          console.warn(res.data.operation.message)
        }
      }).catch(error => {
        console.warn(error)
      })
    } else {
      addProductAuth(route.params.id, conut)
      setTextTopMessage(lang['basket_adding.success'])
      refRBSheet.current.close()
      scrollTop()
    }
  }
  const [isOpen , setIsOpen] = useState(false);
  return (
    <ScrollView style={[bs.wrapper, style.wrapper]} ref={scroll}>
      {textTopMessage && (<TopMessage text={textTopMessage} onPress={() => { setTextTopMessage(false) }} />)}
      {productInfo ? (
        <>
          <View style={style.top}>
            <TouchableOpacity style={style.topIcon} onPress={onBack}><Icon width={36} height={36} type={`left`} color={st.primaryColor} /></TouchableOpacity>
            {token && (<TouchableOpacity style={style.topIcon} onPress={onAddFav}><Icon width={36} height={36} type={`favorite-border`} color={productInfo.is_favorite ? "#FF2E2E" : st.primaryColor} /></TouchableOpacity>)}
          </View>
          <View style={style.header}>
            <TouchableOpacity style={style.imageWrapper} onPress={() => {
              setIsOpen(true)
            }}>
              <Image
                source={{ uri: `${assets}${productInfo.feature}` }} style={{
                  width: 270,
                  height: 270
                }} />
            </TouchableOpacity>
            {console.log(productInfo)}
            <Modal visible={isOpen} transparent={true} onRequestClose={() => {setIsOpen(false)}} >
                <TouchableOpacity style={style.close} onPress={() => setIsOpen(false)}>
                  <Icon type={`close`} color={'#ffffff'} width={24} height={24}/>
                </TouchableOpacity>
              {/*<ImageViewer imageUrls={productInfo.images.map((it) => {
                return {
                  url: `${assets}${it}`
                }
              })}/>*/}

              <ImageViewer imageUrls={[{ url: `${assets}${productInfo.feature}` }]}/>

            </Modal>
            <View style={style.headerWrapper}>
              <Text style={style.title}>{productInfo.name}</Text>
              <View style={style.pr}>
                <Text style={style.price}>{productInfo.price} {lang['currency.tenge']}</Text>              
                <View style={style.prPr}>
                {productInfo.price_without_discount && <Text style={style.priceDiscount}>{productInfo.price_without_discount} {lang['currency.tenge']}</Text>}
                </View>
              </View>
            </View>
          </View>
          <View style={style.options}>
            <ProductOptions lang={lang} options={productInfo.option_values} />
          </View>
          <View style={style.buttons}>
            <View style={style.button}><Button text={lang['product.buttons.add_basket.text']} onPress={onAddCard} /></View>
            <RBSheet
              ref={refRBSheet}
              height={450}
              openDuration={250}
              customStyles={bs.sheet}
            >
              <AddProduct onAddCard={onAddCardHandler} lang={lang} product={productInfo} onClose={() => { refRBSheet.current.close() }} />
            </RBSheet>
          </View>
          <Comments lang={lang} productId={route.params.id} data={productInfo.comments} onAddCommentHandler={() => { fetchData() }} />
        </>
      ) : (
          <Loader />
        )}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    token: state.auth.token
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addProductAuth: (id, count) => {
      dispatch(addProduct(id, count))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);
