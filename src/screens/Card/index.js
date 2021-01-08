import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, RefreshControl } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { apiBasket, apiProducts } from "../../api";
import { CardEdit, FullClear } from "../../blocks";
import { Button, Icon, Loader } from "../../components";
import { bs, screens, wrappers } from "../../const";
import style from "./style";
import { removeProduct, addProduct } from "../../store/cardNoAuth/index";

const Card = ({ route, navigation }) => {
  const currentLang = useSelector(state => state.lang.currentLang);
  const lang = useSelector(state => state.lang.data);
  const token = useSelector(state => state.auth.token);
  const crd = useSelector(state => state.cardNoAuth.cards)
  const dispatch = useDispatch();

  const [isFetching, setIsFetching] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchData()
  }, [route, token])

  const fetchData = () => {
    setIsFetching(true);

    if (token) {
      apiBasket.getCard(currentLang, token).then(res => {
        if (res.data.operation.code === 200) {
          setCards(res.data.data.items.map(item => {
            item.isLoad = false;
            return item;
          }))
        }
      }).catch(error => {
        console.warn(error)
        setCards([])
      }).finally(() => {
        setIsFetching(false)
        setIsRefreshing(false)
      })
    } else {
      let arr = crd.map((item) => {
        return item.id
      })
      apiProducts.getCards(currentLang, arr).then(res => {
        console.log(res);
        if (res.data.operation.code === 200) {
          setCards(res.data.data.items.map(item => {
            item.isLoad = false;
            return item;
          }))
        }
      }).catch(error => {
        console.warn(error)
        setCards([])
      }).finally(() => {
        setIsFetching(false)
        setIsRefreshing(false)
      })
    }
  }

  const onAdd = (id, stock, count) => {
    if (count < stock) {
      if (token) {
        setCards(cards.map(item => {
          if (item.product.id === id) {
            item.isLoad = true;
          }
          return item
        }))
        apiBasket.addCard(currentLang, token, id, 1).then(res => {
          if (res.data.operation.code === 200) {
            setCards(cards.map(item => {
              if (item.product.id === id) {
                item.count = count + 1;
              }
              return item
            }))
          } else {
            console.warn(res.data.operation.message)
          }
        }).catch(error => {
          console.warn(error)
        }).finally(() => {
          setCards(cards.map(item => {
            if (item.product.id === id) {
              item.isLoad = false;
            }
            return item
          }))
        })
      } else {
        dispatch(addProduct(id, 1))
      }
    }
  }
  const onRemove = (id, stock, count) => {
    if (count > 1) {
      if (token) {
        setCards(cards.map(item => {
          if (item.product.id === id) {
            item.isLoad = true;
          }
          return item
        }))
        apiBasket.removeCard(currentLang, token, id, 1).then(res => {
          if (res.data.operation.code === 200) {
            setCards(cards.map(item => {
              if (item.product.id === id) {
                item.count = count - 1;
              }
              return item
            }))
          } else {
            console.warn(res.data.operation.message)
          }
        }).catch(error => {
          console.warn(error)
        }).finally(() => {
          setCards(cards.map(item => {
            if (item.product.id === id) {
              item.isLoad = false;
            }
            return item
          }))
        })
      } else {
        dispatch(removeProduct(id, 1))
      }
    }
  }

  const onDelete = (id, count) => {
    if (token) {
      setCards(cards.map(item => {
        if (item.product.id === id) {
          item.isLoad = true;
        }
        return item
      }))
      apiBasket.removeCard(currentLang, token, id, count).then(res => {
        if (res.data.operation.code === 200) {
          setCards(cards.filter((item) => {
            if (item.product.id !== id) {
              return item
            }
          }))
        } else {
          console.warn(res.data.operation.message)
        }
      }).catch(error => {
        console.warn(error)
      }).finally(() => {
        setCards(cards.map(item => {
          if (item.product.id === id) {
            item.isLoad = false;
          }
          return item
        }))
      })
    } else {
      setCards(cards.filter(item => {
        if (item.id !== id) {
          return item
        }
      }))
      dispatch(removeProduct(id, count))
    }
  }

  const onRefresh = () => {
    setIsRefreshing(true);
    fetchData();
  }

  return (
    <ScrollView style={bs.wrapper} contentContainerStyle={{
      flexGrow: 1,
      paddingBottom: 30
    }} refreshControl={
      <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
    }
    >
      <View style={{ flex: 1 }}>
        {isFetching ? <Loader /> : cards.length > 0 ? (
          <View style={style.content}>
            <View style={style.header}>
              <Text style={style.headerTitle}>{lang['basket.header']}</Text>
            </View>
            {cards.map((item, key) => (
              <View style={style.item} key={key}>
                {token ? <CardEdit isLoad={item.isLoad} id={item.product.id} name={item.product.name} stock_balance={item.product.stock_balance} feature={item.product.feature} price={item.product.price} count={item.count} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} /> :
                  <CardEdit isLoad={item.isLoad} id={item.id} name={item.name} stock_balance={item.stock_balance} feature={item.feature} price={item.price} count={crd.find((i) => { return i.id === item.id }).count} onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} />
                }

              </View>
            ))}
            <View style={style.button}>
              <Button text={lang['basket.buttons.checkout.text']} onPress={() => { 
                token ? navigation.navigate(wrappers.Card, { screen: screens.Checkout })  : navigation.navigate(screens.Auth); setCards([])
                
                }} />
            </View>
          </View>
        ) : (
            <View style={bs.clear}>
              <View style={bs.clearWrapper}>
                <View style={bs.clearIcon}><Icon type={`basket`} width={120} height={120} color={"#1E385B"} /></View>
                <View style={bs.clearContent}>
                  <Text style={bs.clearTitle}>{lang['basket.empty.header']}</Text>
                  <Text style={bs.clearText}>{lang['basket.empty.subheader']}</Text>
                </View>
                <View style={bs.clearButton}>
                  <Button text={lang['basket.buttons.catalog.text']} type={`double`} onPress={() => { navigation.navigate(wrappers.Dinner, { screen: screens.Categories }) }} />
                </View>
              </View>
            </View>
          )}
      </View>
    </ScrollView>
  )
}

export default Card;