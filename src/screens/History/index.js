import React, { useState,useEffect } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { connect } from "react-redux";
import { apiProfile } from "../../api";
import { Button, CheckoutCard, Icon, Loader } from "../../components";
import { bs, screens, wrappers } from "../../const";
import style from "./style";
import useScroll from "../../hooks/useScroll";
import { TopMessage } from "../../blocks";


const History = ({ route, navigation, lang, token, currentLang }) => {
  const [userId, setUserId] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [cards, setCards] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { scroll, scrollTop } = useScroll();

  const [textTopMessage, setTextTopMessage] = useState(false);

  useEffect(()=> {
    if(textTopMessage) {
      setTimeout(()=> {
        setTextTopMessage(false);
      }, 8000)
    }
  }, [textTopMessage])

  const openTopMessageHandler = (text) => {
    setTextTopMessage(text)
    scroll.current.scrollToOffset({ animated: true, offset: 0 });
    fetchData();
  }
  
  useEffect(()=>{
    if(userId) {
      fetchData()
    } else {
      fetchUser()
    }
  }, [route, userId, page])

  useEffect(()=>{
    if(isRefreshing) {
      if(userId) {
        setCards([]);
        fetchData()
      } else {
        fetchUser()
      }
    }
  }, [isRefreshing])


  const fetchUser = () => {
    apiProfile.getInfo(currentLang, token).then(res => {
      setUserId(res.data.data.item.id);
    }).catch(error => {
      console.warn(error)
    })
  }


  const fetchData = (pg) => {
    setIsFetching(true);
    apiProfile.getHistory(currentLang, token, userId, page).then(res => {
      if(pg) {
        setCards([...cards, res.data.data.items])
      } else {
        setCards(res.data.data.items)
      }
      setLastPage(res.data.data.paginate.last_page)
    }).catch(error => {
      console.warn(error)
    }).finally(()=> {
      setIsFetching(false);
      setIsRefreshing(false)
    })
  }

  const onLoadMore = () => {
    if (page < lastPage) {
      if (!isFetching) {
        setPage(page+1);
      }
    }
  }

  const onRefresh = () => {
    setPage(1);
    setIsRefreshing(true);
  }

  const renderHeader = () => {
    if(cards.length > 0) {
      return (
        <View style={style.header}>
          <Text style={style.headerTitle}>{lang['profile.history_link']}</Text>
        </View>
      )
    }
  }

  const renderClear = () => {
    return isFetching ? null : (
      <View style={bs.clear}>
        <View style={bs.clearWrapper}>
          <View style={bs.clearIcon}><Icon type={`basket`} width={120} height={120} color={"#1E385B"}/></View>
          <View style={bs.clearContent}>
            <Text style={bs.clearTitle}>{`Нет заказов в истории`}</Text>
          </View>
          <View style={bs.clearButton}>
            <Button text={lang['basket.buttons.catalog.text']} type={`double`} onPress={()=>{navigation.navigate(wrappers.Dinner, {screen: screens.Categories})}} />
          </View>
        </View>
      </View>
    )
  };

  const renderItem = ({ item }) => (
    <View style={style.item}>
      <CheckoutCard openTopMessage={openTopMessageHandler} basket={item.basket} id={item.id} title={item.comment} date={item.created_at}/>
    </View>
  )

  const renderLoader = () => {
    return isFetching ? <Loader /> : null
  }


  return (
    <View style={[bs.wrapper, {flex:1,}]}>
      {textTopMessage && (<TopMessage text={textTopMessage} onPress={()=>{setTextTopMessage(false)}}/>)}
      <FlatList
        ref={scroll}
        style={style.lists}
        data={cards}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={onLoadMore}
        onEndReachedThreshold={1}
        ListFooterComponent={renderLoader}
        ListEmptyComponent={renderClear}
        ListHeaderComponent={renderHeader()}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
        contentContainerStyle={{flex:1}}
      />
    </View>
  )
}
const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    token: state.auth.token
  }
}

export default connect(mapStateToProps, null)(History);