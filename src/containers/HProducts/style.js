import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    paddingTop: isIpad ? 20 : 0,
    paddingBottom: isIpad ? 20 : 0,
    ...st.basePadding
  },
  slide: {
    width: 198
  },
  title: {
    fontFamily: st.fontBold,
    textAlign: "center",
    marginBottom: isIpad ? 40 : 20,
    fontSize: isIpad ? 24 : 16,
    color: st.whiteColor
  },
  sl: {
    width: 20
  }
})

export default style;