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
    paddingTop: 15,
    paddingBottom: 30
  },
  field: {
    marginBottom: 20
  },
  row: {
    marginTop: 5,
    marginBottom: 5,
  },
  error: {
    color: "#FF2E2E",
    fontFamily: st.fontRegular,
    fontSize: 14,
  },
  text: {
    fontFamily: st.fontMedium,
    fontSize: 18,
    
  }
})

export default style;