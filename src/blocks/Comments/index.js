import React, { useRef } from "react";
import { View, Text } from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import moment from "moment/dist/moment";

import style from "./style";
import { AddComment } from "../";
import { Button } from "../../components";
import { bs } from "../../const";
import { useSelector } from "react-redux";

const Comments = ({ data, lang, productId, onAddCommentHandler }) => {
  const token = useSelector(state=> state.auth.token)
  const refRBSheet = useRef();

  const onOpenSheet = () => {
    refRBSheet.current.open();
  }

  const onCloseAddForm = () => {
    refRBSheet.current.close();
    onAddCommentHandler()
  }

  return (
    <View style={style.wrapper}>
      {data.length > 0 ? (
        <View style={style.comments}>
          <Text style={style.title}>Комментарии</Text>
          <View style={style.items}>
            {data.map((item, key) => (
              <View style={style.item} key={key}>
                <View style={style.itemHeadedr}>
                  <Text style={style.itemName}>{item.user_name}</Text>
                  <Text style={style.itemDate}>{moment(item.created_at).format("DD.MM.YYYY")}</Text>
                </View>
                <Text style={style.itemText}>
                  {item.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      ) : (
          <Text style={[style.title, style.titleClear]}>{/*TODO EDIT */}Комментарии отсутствуют</Text>
        )}
        {token && (<View style={style.button}>
        <Button type={`double`} onPress={onOpenSheet} text={lang['product.buttons.comment']} />
      </View>)}
      <RBSheet
        ref={refRBSheet}
        height={460}
        openDuration={250}
        customStyles={bs.sheet}
      >
        <AddComment lang={lang} productId={productId} onClose={onCloseAddForm} />
      </RBSheet>
    </View>
  )
}

export default Comments;