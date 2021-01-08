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
    ...st.basePadding,
    marginBottom: 15,
  },
  button: {
    ...st.basePadding,
    marginTop: 10
  },
  wrapper: {
    paddingBottom: 30
  }
})

export default style;