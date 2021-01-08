import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    ...st.basePadding
  },
  slide: {
    width: 198
  },
  title: {
    fontFamily: st.fontBold,
    textAlign: "center",
    marginBottom: 20,
    fontSize: 16,
    color: st.whiteColor
  },
  sl: {
    width: 20
  }
})

export default style;