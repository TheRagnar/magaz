import {StyleSheet} from 'react-native';

import st from '../../const/styleConst';

const HeaderStyle = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: st.secondaryColor,
    paddingTop: 20,
    paddingBottom: 15,
  },
  image: {
    width: 128,
    height: 42
  }
});

export default HeaderStyle;