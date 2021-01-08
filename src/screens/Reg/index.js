import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import { authAfterReg } from '../../store/auth';

import { Button, Icon, Input } from "../../components";

import { bs, screens } from '../../const';
import style from '../Auth/style';

import { apiAuth } from '../../api';


const Reg = ({ lang, authAfterRegAction, navigation, currentLang }) => {
  const [isPending, setIsPending] = useState(false);
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false);

  const press = () => {
    apiAuth.authIn(currentLang, login, password).then(res => {
      authAfterRegAction(res.data.access_token)
    }).catch(error => {
      console.warn(error)
    }).finally(() => {
      setIsPending(false)
    })
  }

  const register = () => {
    setError(false);
    setIsPending(true);
    apiAuth.registration(currentLang, login, password).then(resp => {
      if(resp.data.operation.code === 200) {
        press()
      } else {
        setError(resp.data.operation.message.replace(/<br\s*[\/]?>/gi, "\n"))
        setIsPending(false)
      }
    }).catch(error => {
      setIsPending(false)
    })
  }

  const goToAuth = () => {
    navigation.navigate(screens.Auth)
  }

  return (
    <ScrollView style={[bs.fullWrapper, style.wrapper]} contentContainerStyle={bs.coreBottom}>
      <View style={style.wrapper}>
        <Text style={[bs.title, style.title]}>{lang['registation.header']}</Text>
        <View style={style.fields}>
          <View style={bs.input}>
            <Input label={lang['profile.email']} value={login} onChangeText={(text) => { setLogin(text) }} />
          </View>
          <View style={bs.input}>
            <Input secureTextEntry={true} label={lang['autorization.password']} value={password} onChangeText={(text) => { setPassword(text) }} />
            {/*<Text style={style.reset} onPress={goToReset}>{lang['autorization.forgot_password']}</Text>*/}
          </View>
        </View>
        {error && <View style={style.error}><Text style={style.errorText}>{error}</Text></View>}
        <View style={style.button}>
          <Button isLoad={isPending} text={lang['registation.create']} onPress={register} />
        </View>        
        <View style={style.info}>
          <Text style={style.center}>
            <Text style={style.link} onPress={(goToAuth)}>{lang["autorization.enter"]}</Text>
          </Text>
        </View>
        <View style={style.logo}>
          <Icon type={`logo`} color={"#fff"} width={128} height={42} />
        </View>
      </View>
    </ScrollView>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    authAfterRegAction: (token) => {
      dispatch(authAfterReg(token))
    }
  }
}

const mapStateToProps = state => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reg);