import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const all = {
  width: '100%',
  borderRadius: st.baseBorderRadius,
  justifyContent: 'center',
  alignItems: 'center',
  height: 67
}
const allText = {
  fontFamily: st.fontRegular,
  fontSize: 16,
}

const ButtonStyle = StyleSheet.create({
  white: {
    ...all,
    backgroundColor: st.whiteColor
  },
  whiteText: {
    ...allText,
    color: st.textColor
  },
  primary: {
    ...all,
    backgroundColor: st.primaryColor,
  },
  primaryText: {
    ...allText,
    color: st.textColor
  },
  double: {
    ...all,
    backgroundColor: st.doubleColor,
  },
  doubleText: {
    ...allText,
    color: '#738E9B'
  }
});

export default ButtonStyle;

