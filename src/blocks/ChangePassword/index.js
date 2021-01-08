import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import {Button, Icon, Input } from "../../components";
import { bs } from "../../const";

import style from "./style";

const ChangePassword = ({ lang, onClose, onChangePassword, error, isFetching }) => {
  const [beforePassword, setBeforePassword] = useState('');

  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const onChangeHandler = () => {
    onChangePassword(beforePassword, newPassword, repeatPassword)
  }

  return (
    <View style={style.wrapper}>
      <View style={style.header}>
        <Text style={style.title}>{lang['change_password.header']}</Text>
        <TouchableOpacity onPress={onClose} style={style.iconClose}>
          <Icon type={`close`} width={26} height={26} />
        </TouchableOpacity>
      </View>
      <View style={style.content}>
        <View style={style.input}>
          <Input secureTextEntry={true} label={lang['change_password.old_password']} value={beforePassword} onChangeText={(text)=>{setBeforePassword(text)}}/>
        </View>
        <View style={style.input}>
          
        </View>
        <View style={style.input}>
          <Input secureTextEntry={true} label={lang['change_password.new_password']} value={newPassword} onChangeText={(text)=>{setNewPassword(text)}}/>
        </View>
        <View style={style.input}>
          <Input secureTextEntry={true} label={lang['change_password.confim_password']} value={repeatPassword} onChangeText={(text)=>{setRepeatPassword(text)}}/>
        </View>
        {error && (
          <View style={style.input}>
            <Text style={style.error}>{error}</Text>
          </View>
        )}
        <View style={style.input}>
          <Button isLoad={isFetching} text={lang['change_password.change_password']} onPress={onChangeHandler}/>
        </View>
      </View>
    </View>
  )
}

export default ChangePassword;