import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import { apiProfile } from "../../api";
import { Input, Button, Loader } from "../../components";
import { bs } from "../../const";

import style from "./style";

const PProfileForm = ({ onOpenMessage }) => {
  const [fio, setFio] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [error, setError] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const [isFetchingEdit, setIsFetchingEdit] = useState(false);

  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.currentLang);
  const token = useSelector(state => state.auth.token);

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

  const changeValue = () => {
    setError(false);
    setIsFetchingEdit(true)
    apiProfile.changeInfo(currentLang, token, {
      fio: fio,
      phone: phone.replace(/[^\d]/ig, ''),
      city: city,
      address: address
    }).then(res => {
      if (res.data.operation.code === 200) {
        setFio(res.data.data.item.fio || "");
        setPhone(res.data.data.item.phone || "");
        setCity(res.data.data.item.city || "");
        //setEmail(res.data.data.item.email || "");
        setAddress(res.data.data.item.address || "");
        onOpenMessage(lang['profile.success_edit'])
      } else {
        setError(res.data.operation.message.replace(/<br\s*[\/]?>/gi, "\n"))
      }
    }).catch(error => {
      console.warn(error)
    }).finally(()=>{
      setIsFetchingEdit(false)
    })
  }

  return (
    <View style={style.wrapper}>
      <Text style={style.title}>{lang['profile.personal_information']}</Text>
      {isFetching ? <Loader /> : (
        <>
          <View style={bs.input}>
            <Text style={style.label}>{lang['profile.fio']}</Text>
            <Input value={fio} onChangeText={(text) => { setFio(text) }} />
          </View>

          <View style={bs.input}>
            <Text style={style.label}>{lang['profile.phone']}</Text>
            <Input value={phone} type={`phone`} onChangeText={(text) => { setPhone(text) }} />
          </View>

          <View style={bs.input}>
            <Text style={style.label}>{lang['profile.city']}</Text>
            <Input value={city} onChangeText={(text) => { setCity(text) }} />
          </View>

          <View style={bs.input}>
            <Text style={style.label}>{lang['profile.address']}</Text>
            <Input value={address} onChangeText={(text) => { setAddress(text) }} />
          </View>
          {error && (
            <View style={bs.input}>
              <Text style={style.error}>{error}</Text>
            </View>
          )}
          <View style={style.button}>
            <Button isLoad={isFetchingEdit} onPress={changeValue} text={`Сменить данные`} />
          </View>
        </>
      )}
    </View>
  )
}

export default PProfileForm;