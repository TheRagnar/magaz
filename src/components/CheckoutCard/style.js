import { StyleSheet } from 'react-native';

import {st} from '../../const';

const style = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: 73,
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: st.borderRadius,
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
    alignItems: 'center',
    flex: 1,
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
    color: '#777777',
    width: 90,
    marginLeft: 15,
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
  },
  header: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    color: "#333",
    fontFamily: st.fontBold,
    fontSize: 18,
  },
  iconClose: {
    marginLeft: 20
  },
  products: {
    ...st.basePadding,
    paddingBottom: 15,
  },
  button: {
    ...st.basePadding,
  },
  row: {
    marginBottom: 10
  },
  input: {
    ...st.baseShadow,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 25,
    height: 200,
    borderRadius: 5,
    textAlignVertical: "top"
  },
  field: {
    marginTop: 15,
    marginBottom: 20
  }
});

export default style;

