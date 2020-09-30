import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const LoginStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: st.secondaryColor,
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center'
  },
  title: {
    fontSize: 18,
    fontFamily: st.fontBold,
    color: st.whiteColor,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    width: 220,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 12,
    color: st.whiteColor,
    fontFamily: st.fontRegular,
    textAlign: 'center'
  },
  form: {
    marginTop: 40,
    marginBottom: 60,
    position: 'relative'
  },
  input: {
    marginBottom: 20
  },
  link: {
    position: 'absolute',
    color: '#D2D9F0',
    fontSize: 16,
    textAlign: 'right',
    bottom: -15,
    right: 0,
    fontFamily: st.fontRegular
  },
  pre: {
    width: 260,
    marginTop: 30,
    fontSize: 16,
    fontFamily: st.fontRegular,
    color: '#7C88B1',
    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  preLink: {
    fontFamily: st.fontMedium,
    color: st.whiteColor
  },
  logo: {
    width: 128,
    height: 42
  },
  footer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 35,
    justifyContent: 'center',
    alignItems: 'center'
  },
  whiteText: {
    fontSize: 14,
    color: st.whiteColor,
    fontFamily: st.fontRegular,
    textAlign: 'center',
    width:  270,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20
  }
});

export default LoginStyle;

