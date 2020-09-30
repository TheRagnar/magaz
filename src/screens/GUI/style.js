import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';
const GUIStyle = StyleSheet.create({
  wrapper: {
    height: '100%',
  },
  component: {
    ...st.baseMargin,
    marginBottom: 20
  },
  componentName: {
    color: st.textColor,
    fontSize: 14,
    marginBottom: 10,
    fontFamily: st.fontRegular,
  }
});

export default GUIStyle;

