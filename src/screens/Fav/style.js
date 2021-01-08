import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerTitle: {
    textAlign: "center",
    fontFamily: st.fontBold,
    color: "#474950",
    fontSize: 18
  },
  content: {
    ...st.basePadding,
  },
  clearText: {
    textAlign: "center",
    padding: 30,
    fontFamily: st.fontRegular,
    fontSize: 14,
    color: st.grColor
  }
})

export default style;