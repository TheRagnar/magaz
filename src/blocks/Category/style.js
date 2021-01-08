import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    ...st.baseShadow,
    backgroundColor: "#fff",
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    flexDirection: "row",
    borderRadius: st.borderRadius
  },
  image: {
    width: 28,
    height: 28
  },
  imageWrapper: {
    marginRight: 20
  },
  title: {
    color: st.iconColor,
    fontFamily: st.fontBold,
    fontSize: 16,
  }
})

export default style;