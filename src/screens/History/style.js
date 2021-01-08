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
  item: {
    marginTop: 20,
    ...st.basePadding
  }
})

export default style;