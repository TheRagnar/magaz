import { StyleSheet } from "react-native";

import { st } from "../../const";

const style = StyleSheet.create({
  box: {
    width: 28,
    height: 28,
    borderRadius: 4,
    backgroundColor: "#fff",
    minWidth: 28,
    marginRight: 12,
    borderWidth: 1,
    borderColor: "#E7E7E7",
    position: "relative",
  },
  boxHover: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: "#1F429E",
    borderRadius: 4,
  },
  wrapper: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  icon: {
    width: 33,
    height: 33,
    position: "absolute",
    bottom: 0,
    left: 0,
  },
  text: {
    paddingTop: 4,
    color: "#949494",
    fontSize: 18,
    fontFamily: st.fontRegular,
  },
});

export default style;
