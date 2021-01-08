import React, { useState } from "react";
import { useSelector } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { Button, Icon } from "../../components";
import { bs } from "../../const";
import { apiComments } from "../../api";

import style from "./style";

const AddComment = ({ productId, lang, onClose }) => {
  const currentLang = useSelector(state => state.lang.currentLang);
  const token = useSelector(state => state.auth.token);
  const [commentText, setCommentText] = useState('')
  const [isEnd, setIsEnd] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState(false);

  const onCloseHandler = () => {
    setIsEnd(false);
    onClose()
  }

  const onAddHandler = () => {
    setIsFetching(true)
    setError(false);
    apiComments.addComments(currentLang, token, productId, commentText).then((res)=>{
      if(res.data.operation.code === 200) {
        setIsEnd(true)
      } else {
        setError(res.data.operation.message);
        console.warn(res.data.operation.message)
      }
    }).catch(error => {
      console.warn(error);
    }).finally(()=>{
      setIsFetching(false)
    })
  }

  return (
    <View style={style.wrapper}>
      {isEnd ? (
        <View style={style.wrp}>
          <View style={style.content}>
            <View style={style.icon}><Icon type={`tick`} width={152} height={252}/></View>
            <Text style={style.el}>{lang['product.commented.accept_comment']}</Text>
            <View style={style.button}>
              <Button text={lang['product.commented.button.close.text']} type={`double`} onPress={onCloseHandler} />
            </View>
          </View>
        </View>) : (
          <View style={style.wrp}>
            <View style={style.header}>
              <Text style={style.title}>{lang['product.commented.header']}</Text>
              <TouchableOpacity onPress={onCloseHandler} style={style.iconClose}>
                <Icon type={`close`} width={26} height={26} />
              </TouchableOpacity>
            </View>
            <View style={style.content}>
              <View style={bs.input}>
                <TextInput multiline numberOfLines={4} editable placeholder={lang['product.commented.comment']} value={commentText} onChangeText={(text) => { setCommentText(text) }} style={style.field} />
              </View>
              {error && (<View style={bs.input}><Text style={bs.error}>{error}</Text></View>)}
              <View style={style.button}>
                <Button isLoad={isFetching} text={lang['product.commented.button.accept_comment.text']} onPress={onAddHandler} />
              </View>
            </View>
          </View>
        )}
    </View>
  )
}

export default AddComment;