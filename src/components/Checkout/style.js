import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const Checkout = StyleSheet.create({
  box: {
    width: '100%',
    height: 73,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: st.baseBorderRadius,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    overflow: 'hidden'
  },
  content: {
    paddingLeft: 30,
    paddingRight: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontSize: 16,
    color: '#262626',
    marginRight: 20,
    fontFamily: st.fontBold
  },
  date: {
    fontFamily: st.fontRegular,
    fontSize: 16,
    color: '#777777'
  },
  more: {
    backgroundColor: '#E8E8E8',
    width: 68,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 24,
    height: 24,
  }
});

export default Checkout;

