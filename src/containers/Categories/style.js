import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  item: {
    marginBottom: 15,
    ...st.basePadding
  },
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
})

export default style;