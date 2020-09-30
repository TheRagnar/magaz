import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const CardProduct = StyleSheet.create({
  image: {
    width: 86,
    height: 117,
  },
  imageBox: {
    width: 86,
    height: 117,
    marginRight: 7,
    minWidth: 86
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    flex: 0,
    flexGrow: 1
  },
  title: {
    marginBottom: 15,
  },
  titleText: {
    fontFamily: st.fontMedium,
    fontSize: 16,
    color: st.textColor
  },
  priceText: {
    color: st.titleColor,
    fontFamily: st.fontBold,
    fontSize: 18,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  footerControl: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#DEDEDE',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 18,
    fontFamily: st.fontRegular,
    color: st.grayColor,
    width: 32,
    textAlign: 'center'
  },
  buttonText: {
    color: st.grayColor,
    fontSize: 14,
    fontFamily: st.fontRegular
  },
  boxNotAvailble: {
    opacity: .25,
    zIndex: 2
  },
  wrapper: {
    position: 'relative'
  },
  notAvailableBox: {
    position: 'absolute',
    zIndex: 4,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  notAvailableText: {
    textAlign: 'center',
    fontFamily: st.fontBold,
    color: st.titleColor,
    fontSize: 18
  }
});

export default CardProduct;