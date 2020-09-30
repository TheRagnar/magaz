import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const BasketStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: st.whiteColor,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  clear: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 60,
    height: '100%'
  },
  button: {
    width: '100%',
    marginTop: 80
  },
  title: {
    color: '#1E385B',
    fontFamily: st.fontBold,
    textAlign: 'center',
    marginBottom: 16,
    fontSize: 20
  },
  text: {
    paddingLeft: 55,
    paddingRight: 55,
    textAlign: 'center',
    color: '#777',
    fontFamily: st.fontRegular,
    fontSize: 14,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 50
  }
});

export default BasketStyle;

