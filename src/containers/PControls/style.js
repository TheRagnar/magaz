import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    ...st.basePadding,
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    flexDirection: "row"
  },
  text: {
    color: "#777777",
    fontSize: 16,
    fontFamily: st.fontRegular
  },
  icon: {
    marginRight: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  }
})

export default style;