import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import useScroll from "../../hooks/useScroll";


import style from "./style";
import { bs } from "../../const";
import { PControls, PLang, PProfileForm } from "../../containers";
import { useSelector } from "react-redux";
import { FullClear, TopMessage } from "../../blocks";

const Profile = () => {
  const [textTopMessage, setTextTopMessage] = useState(false);
  const lang = useSelector(state => state.lang.data);
  const token = useSelector(state => state.auth.token);
  const { scroll, scrollTop } = useScroll();



  useEffect(() => {
    if (textTopMessage) {
      setTimeout(() => {
        setTextTopMessage(false);
      }, 8000)
    }
  }, [textTopMessage])


  const openTopMessageHandler = (text) => {
    scrollTop();
    setTextTopMessage(text)
  }

  return (
    <ScrollView style={bs.wrapper} ref={scroll} contentContainerStyle={{ flexGrow: 1 }}>
      {token ? (
        <View style={{ flex: 1 }}>
          <View style={style.header}>
            {textTopMessage && (<TopMessage text={textTopMessage} onPress={() => { setTextTopMessage(false) }} />)}
            <Text style={style.headerTitle}>{lang['profile.header']}</Text>
          </View>
          <View style={style.controls}>
            <PControls openTopMessage={openTopMessageHandler} />
          </View>
          <View style={style.langs}>
            <PLang />
          </View>
          <View style={style.content}>
            <PProfileForm onOpenMessage={openTopMessageHandler} />
          </View>
        </View>
      ) : (
          <FullClear />
        )}
    </ScrollView>
  )
}

export default Profile;