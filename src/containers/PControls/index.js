import React, { useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "../../components";
import { screens, st, wrappers, bs } from "../../const";
import RBSheet from "react-native-raw-bottom-sheet";

import style from "./style";
import { ChangeEmail, ChangePassword } from "../../blocks";
import { apiProfile } from "../../api";
import { logOut } from "../../store/auth";

const PControls = ({ openTopMessage }) => {
  const refRBSheet1 = useRef();
  const refRBSheet2 = useRef();
  const dispatch = useDispatch();
  const navigation = useNavigation()
  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.currentLang);
  const token = useSelector(state => state.auth.token);

  const [error, setError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const [isFetchingEmail, setIsFetchingEmail] = useState(false);
  const [isFetchingPassword, setIsFetchingPassword] = useState(false);


  const onOpenPasswordForm = () => {
    refRBSheet2.current.open()
  }
  const onClosePasswordForm = () => {
    refRBSheet2.current.close()
  }

  const onChangePasswordHandler = (beforePassword, newPassword, repeatPassword) => {
    setPasswordError(false)
    setIsFetchingPassword(true);
    apiProfile.changePassword(currentLang, token, beforePassword, newPassword, repeatPassword).then(res => {
      if(res.data.operation.code === 200) {
        openTopMessage(lang['change_password.success'])
        onClosePasswordForm();
      } else {
        setPasswordError(res.data.operation.message)
      }
    }).catch(error=>{
      setPasswordError(error.message)
      console.warn(error)
    }).finally(()=>{
      setIsFetchingPassword(false)
    })
  }



  const onOpenEmailForm = () => {
    refRBSheet1.current.open()
  }

  const onCloseEmailForm = () => {
    refRBSheet1.current.close()
  }
  
  const onChangeEmailHandler = (email) => {
    setError(false)
    setIsFetchingEmail(true)
    apiProfile.changeEmail(currentLang, token, email).then(res => {
      if(res.data.operation.code === 200) {
        openTopMessage(res.data.operation.message)
        onCloseEmailForm();
      } else {
        setError(res.data.operation.message)
      }
    }).catch(error=>{
      setError(error.message)
      console.warn(error)
    }).finally(()=> {
      setIsFetchingEmail(false)
    })
  }

  const onLogOut = () => {
    dispatch(logOut())
  }

  return (
    <View>
      <View style={style.wrapper}>
        <TouchableOpacity style={style.item} onPress={() => { navigation.navigate(wrappers.Profile, { screen: screens.Fav }) }}>
          <View style={style.icon}><Icon type={`favorite-border`} width={20} height={20} color={st.primaryColor} /></View>
          <View style={style.content}>
            <Text style={style.text}>{lang['profile.favorites_link']}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={() => { navigation.navigate(wrappers.Profile, { screen: screens.History }) }}>
          <View style={style.icon}><Icon type={`history`} width={20} height={20} color={st.primaryColor} /></View>
          <View style={style.content}>
            <Text style={style.text}>{lang['profile.history_link']}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onOpenPasswordForm}>
          <View style={style.icon}><Icon type={`key`} width={20} height={20} color={st.primaryColor} /></View>
          <View style={style.content}>
            <Text style={style.text}>{lang['profile.change_password']}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onOpenEmailForm}>
          <View style={style.icon}><Icon type={`more`} width={20} height={20} color={st.primaryColor} /></View>
          <View style={style.content}>
            {/* TODO */}
            <Text style={style.text}>{`Сменить e-mail`}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.item} onPress={onLogOut}>
          <View style={style.icon}><Icon type={`logout`} width={20} height={20} color={st.primaryColor} /></View>
          <View style={style.content}>
            {/* TODO */}
            <Text style={style.text}>{`Выход`}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet1}
        height={320}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <ChangeEmail error={error} lang={lang}  onClose={onCloseEmailForm} onChangeEmail={onChangeEmailHandler} isFetching={isFetchingEmail} />
      </RBSheet>
      <RBSheet
        ref={refRBSheet2}
        height={420}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <ChangePassword error={passwordError} lang={lang}  onClose={onClosePasswordForm} onChangePassword={onChangePasswordHandler} isFetching={isFetchingPassword} />
      </RBSheet>
    </View>
  )
}

export default PControls;