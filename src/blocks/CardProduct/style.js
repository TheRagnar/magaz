import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  image: {
    width: isIpad ? 160 : 90,
    height: isIpad ? 200 : 120,
  },
  imageWrapper: {
    marginRight: isIpad ? 30 : 10,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  ft: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  content: {
    flex: 1,
    paddingRight: 35
  },
  priceDiscount: {
    paddingLeft: 15,
    color: "#959595",
    textDecorationLine: 'line-through',
    fontFamily: st.fontRegular,
    fontSize: isIpad ? 18 : 12,
  },
  title: {
    fontSize: isIpad ? 20 : 16,
    fontFamily: st.fontMedium,
    marginBottom: 18,
    color: st.iconColor
  },
  price: {
    fontSize: isIpad ? 22 : 18,
    fontFamily: st.fontBold,
    color: st.textColor
  },
  delete: {
    position: "absolute",
    top: -12,
    marginTop: 60,
    zIndex: 10,
    right: 0
  },
  load: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    elevation: 100,
    zIndex: 100,
    backgroundColor: "rgba(255,255,255,.8)"
  },
  right: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center"
  },
  controls: {
    justifyContent: "flex-end",
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20
  },
  btn: {
    width: 22,
    height: 22,
    borderRadius: 11,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE"
  },
  btnText: {
    fontSize: isIpad ? 20 : 16,
    fontFamily: st.fontBold,
    color: "#474950",
    textAlign: "center"
  },
  count: {
    width: 32,
    textAlign: "center",
    fontSize: isIpad ? 20 : 16,
    fontFamily: st.fontBold,
    color: "#474950"
  },
  contentEdit: {
    paddingRight: 0
  },
  footer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 10
  }
})

export default style;