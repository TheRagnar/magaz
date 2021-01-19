import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import style from "./style";
import { bs, screens, wrappers } from "../../const";
import { apiCheckout, apiProfile } from "../../api";
import { Checkbox, Input, Button, Loader } from "../../components";

const Checkout = ({ lang, currentLang, token, navigation }) => {
  const [isPending, setIsPending] = useState(false);
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [isFetching, setIsFetching] = useState(false);

  const [city, setCity] = useState('');
  const [address, setAddress] = useState(''); 
  const [additionalComment, setAdditionalComment] = useState('');
  const [isNal, setIsNal] = useState(false);
  const [error, setError] = useState(false);

  const send = () => {
    setIsPending(true);
    setError(false);
    apiCheckout.by(currentLang, token, {
      fio: fio,
      phone: phone.replace(/[^\d]/ig, ''),
      email: email,
      city: city,
      address: address,
      comment: comment,
      additional_comment: additionalComment,
      payment_type: isNal ? 2 : 1
    }).then((resp) => {
      if (resp.data.operation.code === 200) {
        if (resp.data.data.form_url) {
          navigation.navigate(wrappers.Card, {
            screen: screens.CheckoutView,
            params: {
              url: resp.data.data.form_url,
              id: resp.data.data.order_id
            }
          })
        } else {
          navigation.navigate(wrappers.Card, {
            screen: screens.CheckoutSuccess
          })
        }
      } else {
        setError(resp.data.operation.message.replace(/<br\s*[\/]?>/gi, "\n"))
      }
    }).finally(() => {
      setIsPending(false)
    })
  }
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    setIsFetching(true)
    apiProfile.getInfo(currentLang, token).then(res => {
      const item = res.data.data.item;
      if (item.fio) {
        setFio(item.fio)
      }
      if (item.phone) {
        setPhone(item.phone)
      }
      if (item.city) {
        setCity(item.city)
      }
      if (item.address) {
        setAddress(item.address)
      }
    }).catch(error => {
      console.warn(error)
    }).finally(()=>{
      setIsFetching(false)
    })
  }

  if(isFetching) {
    return (
      <ScrollView style={bs.wrapper}>
        <Loader/>
      </ScrollView>
    )
  }

  return (
    <ScrollView style={bs.wrapper}>
      <View style={style.header}>
        <Text style={style.headerTitle}>{lang['checkout.header']}</Text>
      </View>
      <View style={style.content}>
        <View style={style.field}>
          <Input value={fio} onChangeText={(text) => { setFio(text) }} label={lang['checkout.fio']} />
        </View>
        <View style={style.field}>
          <Input type={`phone`} value={phone} onChangeText={(text) => { setPhone(text) }} label={lang['checkout.phone']} />
        </View>
        <View style={style.field}>
          <Input value={email} onChangeText={(text) => { setEmail(text) }} label={lang['checkout.email']} />
        </View>
        <View style={style.field}>
          <Input value={comment} onChangeText={(text) => { setComment(text) }} label={lang['checkout.comment']} />
        </View>
        <View style={style.line}></View>
        <View style={style.field}>
          <Input value={city} onChangeText={(text) => { setCity(text) }} label={lang['checkout.city']} />
        </View>
        <View style={style.field}>
          <Input value={address} onChangeText={(text) => { setAddress(text) }} label={lang['checkout.address']} />
        </View>
        <View style={style.field}>
          <Input value={additionalComment} onChangeText={(text) => { setAdditionalComment(text) }} label={lang['checkout.additional_comment']} />
        </View>
        <View style={style.field}>
          <View style={style.row}><Checkbox selected={isNal} text={`Оплата наличными`} onPress={() => { setIsNal(!isNal) }} /></View>
          <View style={style.row}><Checkbox selected={!isNal} text={`Оплата картой`} onPress={() => { setIsNal(!isNal) }} /></View>
          <View style={style.row}><Text style={style.text}>{`${lang['checkout.delivery']} ${lang['checkout.delivery.price']} ${lang['currency.tenge']}`}</Text></View>
        </View>
        {error && (
          <View style={style.field}>
            <Text style={style.error}>{error}</Text>
          </View>
        )}

        <View style={style.button}>
          <Button isLoad={isPending} onPress={send} text={lang['checkout.buttons.next.text']} />
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    token: state.auth.token,
  }
}

export default connect(mapStateToProps, null)(Checkout);