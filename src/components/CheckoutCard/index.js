import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Checkbox, Icon } from '..';
import RBSheet from "react-native-raw-bottom-sheet";
import { useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';


import { CardProductDiv } from "../../blocks";
import style from './style';
import { bs, wrappers, screens } from '../../const';
import { TextInput } from 'react-native-gesture-handler';
import { apiProfile } from '../../api';
import moment from "moment/dist/moment";

const CheckoutCard = ({ title, date, basket, id, openTopMessage }) => {
  const navigation = useNavigation();

  const refRBSheet = useRef();
  const refRBSheet2 = useRef();

  const lang = useSelector(state => state.lang.data);
  const currentLang = useSelector(state => state.lang.currentLang);
  const token = useSelector(state => state.auth.token);
  const [type, setType] = useState(3);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const [commentText, setCommentText] = useState('');

  const onClose = () => {
    refRBSheet.current.close()
  }
  const onOpen = () => {
    refRBSheet.current.open()
  }

  const onSend = () => {
    setIsFetching(true)
    setError(false)
    apiProfile.zhaloba(currentLang, token, id, commentText, type).then(res => {
      if(res.data.operation.code === 200) {
        refRBSheet2.current.close()
        openTopMessage(res.data.operation.message)
      } else {
        console.warn(res.data.operation.message)
        setError(res.data.operation.message)
      }
    }).catch(error => {
      console.warn(error)
    }).finally(()=>{
      setIsFetching(false)
    })
  }

  return (
    <View style={style.box}>
      <TouchableOpacity style={style.wrapper} onPress={onOpen}>
        <View style={style.content}>
          <Text style={style.title}>{`Заказ № ${id}`}</Text>
          <Text numberOfLines={1}  style={style.date}>{moment(date).format("DD.MM.YYYY")}</Text>
        </View>
        <View style={style.more}>
          <Icon type={'more'} width={24} height={24} color={"#262626"}/>
        </View>
      </TouchableOpacity>
      <RBSheet
        closeOnDragDown={false}
        ref={refRBSheet}
        height={basket.length > 2 ? 580 : 350}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <ScrollView contentContainerStyle={{
          paddingBottom: 30
        }}>
        <View style={style.header}>
          <Text style={style.title}>{title}</Text>
          <TouchableOpacity onPress={onClose} style={style.iconClose}>
            <Icon type={`close`} width={26} height={26} />
          </TouchableOpacity>
        </View>
        <View style={style.products}>
          {basket.map((item, key) => (
            <CardProductDiv {...item.product} key={key}/>
          ))}
        </View>
        <View style={style.button}>
          <Button type={`double`} text={lang['history.buttons.problems_with_product.text']} onPress={()=>{refRBSheet.current.close(); refRBSheet2.current.open()}}/>
        </View>
        </ScrollView>
      </RBSheet>

      <RBSheet
        ref={refRBSheet2}
        height={600}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <ScrollView>
          <View style={style.header}>
            <Text style={style.title}>{lang['history.problems_with_product.header']}</Text>
            <TouchableOpacity onPress={()=>{refRBSheet2.current.close()}} style={style.iconClose}>
              <Icon type={`close`} width={26} height={26} />
            </TouchableOpacity>
          </View>
          <View style={style.products}>
            <View style={style.row}>
              <Checkbox text={lang['history.problems_with_product.return']} selected={type === 1} onPress={()=>{setType(1)}} />
            </View>
            <View style={style.row}>
              <Checkbox text={lang['history.problems_with_product.exchange']} selected={type === 2} onPress={()=>{setType(2)}} />
            </View>
            <View style={style.row}>
              <Checkbox text={lang['history.problems_with_product.other']} selected={type === 3} onPress={()=>{setType(3)}} />
            </View>
            <View style={style.field}>
              <TextInput multiline numberOfLines={4} editable placeholder={lang['history.problems_with_product.other.text']} value={commentText} onChangeText={(text) => { setCommentText(text) }} style={style.input} />
            </View>
            {error && (
              <View style={style.field}>
                <Text style={bs.error}>{error}</Text>
              </View>
            )}
          </View>
          <View style={style.button}>
            <Button isLoad={isFetching} text={lang['history.problems_with_product.button.accept.text']} onPress={onSend}/>
          </View>
        </ScrollView>
      </RBSheet>
    </View>
  );
}
export default CheckoutCard;