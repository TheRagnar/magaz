import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Button, Icon, Input } from "../../components";
import { bs } from "../../const";

import style from "./style";

const ChangeEmail = ({ lang, onClose, onChangeEmail, error, isFetching }) => {
  const [email, setEmail] = useState('');

  const onChangeHandler = () => {
    onChangeEmail(email)
  }

  return (
    <View style={style.wrapper}>
      <View style={style.header}>
        {/*TODO */}
        <Text style={style.title}>{`Сменить E-mail`}</Text>
        <TouchableOpacity onPress={onClose} style={style.iconClose}>
          <Icon type={`close`} width={26} height={26} />
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <View style={style.input}>
          <Input label={lang['profile.email']} value={email} onChangeText={(text)=>{setEmail(text)}}/>
        </View>
        {error && (
          <View style={style.input}>
            <Text style={style.error}>{error}</Text>
          </View>
        )}
        <View style={style.input}>
          {/* TODO*/ }
          <Button isLoad={isFetching} text={`Сменить`} onPress={onChangeHandler}/>
        </View>
      </View>
    </View>
  )
}

export default ChangeEmail;