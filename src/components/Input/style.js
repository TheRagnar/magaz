import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const InputStyle = StyleSheet.create({
  inputWrapper: {
    width: '100%',
    height: 58,
    borderRadius: st.baseBorderRadius,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    position: 'relative',
    overflow: 'hidden'
  },
  input: {
    width: '100%',
    height: '100%',
    backgroundColor: st.whiteColor,
    borderRadius: st.btnRadius,
    paddingLeft: 25,
    paddingRight: 25,
    fontFamily: st.fontRegular,
    fontSize: 16,
    color: '#828282',
  },
  inputSearch: {
    paddingRight: 64,
  },
  label: {
    marginBottom: 12,
  },
  labelText: {
    fontFamily: st.fontRegular,
    fontSize: 14
  },
  button: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    top: 0,
    width: 64,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonIcon: {
    width: 24,
    height: 24
  }
});

export default InputStyle;

