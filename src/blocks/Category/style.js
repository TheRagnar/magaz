import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    ...st.baseShadow,
    backgroundColor: "#fff",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    borderRadius: st.borderRadius,
    flexDirection: "row"
  },
  image: {
    width: isIpad ? 50 : 28,
    height: isIpad ? 50 : 28,
  },
  imageWrapper: {
    marginRight: isIpad ? 40 : 20,
  },
  title: {
    color: st.iconColor,
    fontFamily: st.fontBold,
    fontSize: isIpad ? 24 : 16,
  }
})

export default style;