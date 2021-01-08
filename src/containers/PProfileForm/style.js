import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  title: {
    fontFamily: st.fontBold,
    color: "#474950",
    fontSize: 18,
    marginBottom: 30
  },
  wrapper: {
    ...st.basePadding,
    paddingTop: 30,
    paddingBottom: 30,
  },
  label: {
    fontSize: 14,
    fontFamily: st.fontRegular,
    color: "#474950",
    marginBottom: 10
  },
  error: {
    fontFamily: st.fontRegular,
    color: "#FF2E2E",
    fontSize: 12,
  }
})

export default style;