import React from 'react';
import { ScrollView, View, Text } from 'react-native';

import { connect } from 'react-redux';

import Button from '../../components/Button';
import CategoryButton from '../../components/CategoryButton';
import Input from '../../components/Input';
import СardProduct from '../../components/СardProduct';
import Checkout from '../../components/Checkout';

import BaseStyle from '../../styles/Base';
import GUIStyle from './style';



/* 
 * Скрин для теста и демонстрации всех возможных компонентов в разных состояниях
 */

class GUI extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View style={BaseStyle.wrapper}>
        <ScrollView style={GUIStyle.wrapper}>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Кнопка default</Text>
            <View style={GUIStyle.componentItem}>
              <Button>Кнопка</Button>
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Кнопка secondary</Text>
            <View style={GUIStyle.componentItem}>
              <Button type="primary">Кнопка</Button>
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Кнопка primary</Text>
            <View style={GUIStyle.componentItem}>
              <Button type="double">Кнопка</Button>
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Категории</Text>
            <View style={GUIStyle.componentItem}>
              <CategoryButton type="skovorody">Сковороды</CategoryButton>
            </View>
          </View>


          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}></Text>
            <View style={GUIStyle.componentItem}>
              <Input placeholder="+77715597100" label="Поле ввода"/>
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}></Text>
            <View style={GUIStyle.componentItem}>
              <Input placeholder="Поиск ..." label="Поле поиска" isSearch/>
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Карточка товара</Text>
            <View style={GUIStyle.componentItem}>
              <СardProduct title="Набор кухонных принадлежностей" price="62 ₸" />
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Карточка товара c контролом</Text>
            <View style={GUIStyle.componentItem}>
              <СardProduct title="Набор кухонных принадлежностей" price="62 ₸" hasControl count={3} />
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Карточка товара нет в наличии</Text>
            <View style={GUIStyle.componentItem}>
              <СardProduct title="Набор кухонных принадлежностей" price="62 ₸" hasControl count={3} notAvailable />
            </View>
          </View>

          <View style={GUIStyle.component}>
            <Text style={GUIStyle.componentName}>Заказ из истории</Text>
            <View style={GUIStyle.componentItem}>
              <Checkout title="Заказ №95872" date="24.07.2020" />
            </View>
          </View>

        </ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    lang: state.lang.data
  };
}

export default connect(mapStateToProps, null)(GUI);