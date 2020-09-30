import { StyleSheet } from 'react-native';

import st from '../../const/styleConst';

const CategoryButtonStyle = StyleSheet.create({
  box: {
    width: '100%',
    height: 67,
    paddingLeft: 25,
    paddingTop: 20,
    paddingBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: st.baseBorderRadius,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
  },
  iconBox: {
    width: 28,
    height: 28,
    marginRight: 20
  },
  icon: {
    width: 28,
    height: 28
  },
  text: {
    color: st.textColor,
    fontSize: 16,
    fontFamily: st.fontBold
  }
});

export default CategoryButtonStyle;

