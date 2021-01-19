import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  options: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 35,
    borderTopColor: "#E4E4E4",
    borderTopWidth: 1,
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
    paddingLeft: 20,
    paddingRight: 20
  },
  pr: {
    justifyContent: "center",
    flexDirection: "row",
  },
  prPr: {
    marginLeft: 15
  },
  priceDiscount: {
    paddingLeft: 15,
    color: "#959595",
    textDecorationLine: 'line-through',
    fontFamily: st.fontRegular,
    fontSize: 14,
  },
  imageWrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -46
  },
  image: {
    width: isIpad ? 400 : 270,
    height: isIpad ? 400 : 270
  },
  title: {
    color: '#474950',
    textAlign: 'center',
    fontSize: isIpad ? 30 : 18,
    fontFamily: st.fontBold,
    marginBottom: isIpad ? 30 : 12,
  },
  price: {
    color: '#333',
    textAlign: 'center',
    fontSize: isIpad ? 24 : 14,
    fontFamily: st.fontBold,
  },
  header: {
    paddingBottom: isIpad ? 45 : 35,
    paddingTop: isIpad ? 40 : 30,
  },
  buttons: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 20
  },
  clear: {
    textAlign: "center",
    fontFamily: st.fontMedium,
    fontSize: isIpad ? 24 : 18
  },
  close: {
    position: "absolute",
    top: 30,
    right: 10,
    elevation: 100,
    zIndex: 100,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default style;