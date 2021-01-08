import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import RBSheet from "react-native-raw-bottom-sheet";

import { Icon } from "../../components";
import { bs } from "../../const";
import { changeLang } from "../../store/lang";
import style from "./style";
import SelectLang from "../../blocks/SelectLang";

const PLang = () => {
  const refRBSheet = useRef();
  const dispatch = useDispatch()
  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.currentLang);

  const onOpenHandler = () => {
    refRBSheet.current.open();
  }
  const onCloseHandler = () => {
    refRBSheet.current.close();
  }
  const onSelectHandler = (tag) => {
    dispatch(changeLang(tag));
  }

  return (
    <View>
      <View style={style.wrapper}>
        <Text style={style.title}>{lang['profile.language']}</Text>
        <TouchableOpacity style={style.changeLang} onPress={onOpenHandler}>
          <Text style={style.currentLang}>{lang[`language.${currentLang}`]}</Text>
          <Icon type={`more`} width={18} height={18} color={`#474950`} />
        </TouchableOpacity>
      </View>
      <RBSheet
        ref={refRBSheet}
        height={375}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <SelectLang lang={lang} currentLang={currentLang} onClose={onCloseHandler} onSelect={onSelectHandler} />
      </RBSheet>
    </View>

  )
}

export default PLang;