import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  input: {
    backgroundColor: st.whiteColor,
    borderRadius: 4,
    backgroundColor: "#fff",
    paddingLeft: 25,
    paddingRight: 25,
    height: 58,
    ...st.baseShadow
  },
  inputLabeled: {
    paddingTop: 12,
  },
  label: {
    position: "absolute",
    top: 18,
    left: 25,
    fontSize: 16,
    color: "#828282",
    fontSize: 16,
    fontFamily: st.fontRegular,
    zIndex: 4,
    elevation: 50,
  },
  labelFocused: {
    top: 8,
    fontSize: 10
  }
})

export default style;