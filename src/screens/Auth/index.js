import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { connect } from "react-redux";

import { bs, screens } from "../../const";
import { Button, Icon, Input } from "../../components";
import style from "./style";
import { autorize } from "../../store/auth";

const Auth = ({ navigation, lang, currentLang, isFetching, errors, autorizeAction }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToRegister = () => {
    navigation.navigate(screens.Reg)
  }

  const onAuth = () => {
    autorizeAction(currentLang, email, password)
  }

  return (
    <ScrollView style={[bs.fullWrapper, style.wrapper]} contentContainerStyle={bs.coreBottom}>
      <View style={style.wrapper}>
        <Text style={[bs.title, style.title]}>{lang['autorization.header']}</Text>
        <Text style={style.text}>{lang['autorization.access_cabinet']}</Text>
        <View style={style.fields}>
          <View style={bs.input}>
            <Input label={lang['autorization.login']} value={email} onChangeText={(text) => { setEmail(text) }} />
          </View>
          <View style={bs.input}>
            <Input secureTextEntry={true} label={lang['autorization.password']} value={password} onChangeText={(text) => { setPassword(text) }} />
            {/*<Text style={style.reset} onPress={goToReset}>{lang['autorization.forgot_password']}</Text>*/}
          </View>
        </View>
        {errors && <View style={style.error}><Text style={style.errorText}>{errors.message}</Text></View>}
        <View style={style.button}>
          <Button isLoad={isFetching} text={lang['autorization.enter']} onPress={onAuth} />
        </View>        
        <View style={style.info}>
          <Text style={style.center}>
            {lang["autorization.not_account"].split(":")[0]}
            <Text style={style.link} onPress={goToRegister}>{lang["autorization.create_account"]}</Text>
          </Text>
        </View>
        <View style={style.logo}>
          <Icon type={`logo`} color={"#fff"} width={128} height={42} />
        </View>
      </View>
    </ScrollView>
  )
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang.data,
    currentLang: state.lang.currentLang,
    isFetching: state.auth.isFetching,
    errors: state.auth.errors,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    autorizeAction: (currentLang, email, password) => {
      dispatch(autorize(currentLang, email, password))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);