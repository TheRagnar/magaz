import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";

import style from "./style";
import { bs, screens, wrappers } from "../../const";
import { useSelector } from "react-redux";
import { apiFav } from "../../api";
import { Loader, Icon, Button } from "../../components";
import { CardProduct, TopMessage } from "../../blocks";

const Fav = ({ route, navigation }) => {
  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.data);
  const token = useSelector(state => state.auth.token);

  const [items, setItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  const [textTopMessage, setTextTopMessage] = useState(false);

  useEffect(() => {
    fetchData()
  }, [route])


  useEffect(()=> {
    if(textTopMessage) {
      setTimeout(()=> {
        setTextTopMessage(false);
      }, 8000)
    }
  }, [textTopMessage])

  const fetchData = () => {
    setIsFetching(true)
    apiFav.getFav(currentLang, token).then(res => {
      setItems(res.data.data.items);
    }).catch(error => {
      console.warn(error)
      setItems([]);
    }).finally(() => {
      setIsFetching(false)
    })
  }

  const onDeleteProduct = (id) => {
    apiFav.deleteFav(currentLang, token, id).then(res => {
      if(res.data.operation.code === 200) {
        openTopMessageHandler(res.data.operation.message)
        fetchData();
      } else {
        console.warn(res.data.operation.error)
      }
    }).catch(error => {
      console.warn(error)
    })
  }

  const openTopMessageHandler = (text) => {
    setTextTopMessage(text)
  }

  return (
    <ScrollView style={bs.wrapper} contentContainerStyle={{flex: 1}}>
      {textTopMessage && (<TopMessage text={textTopMessage} onPress={()=>{setTextTopMessage(false)}}/>)}
      {isFetching ? <Loader/> : items.length > 0 ? (
        <>
          <View style={style.header}>
            <Text style={style.headerTitle}>{lang['profile.favorites_link']}</Text>
          </View>
          <View style={style.content}>
            <View style={style.items}>
              {items.map((item, key) => (
                <View style={style.item} key={key}>
                  <CardProduct onDelete={onDeleteProduct} {...item}  />
                </View>
              ))}
            </View>
          </View>
        </>
      ) : (
        <View style={bs.clear}>
          <View style={bs.clearWrapper}>
            <View style={bs.clearIcon}><Icon type={`favorite-border`} width={120} height={120} color={"#1E385B"} /></View>
            <View style={bs.clearContent}>
              <Text style={bs.clearTitle}>{lang['favorites.empty']}</Text>
            </View>
            <View style={bs.clearButton}>
              <Button text={lang['basket.buttons.catalog.text']} type={`double`} onPress={() => { navigation.navigate(wrappers.Dinner, { screen: screens.Categories }) }} />
            </View>
          </View>
        </View>
      )}
    </ScrollView>
  )
}

export default Fav;