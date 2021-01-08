import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: st.whiteColor,
    paddingLeft: 60,
    paddingRight: 60,
    ...st.baseShadow,
    zIndex: 100,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 30,
    paddingBottom: 30,
    flex: 1,
  },
  icon: {
    marginRight: 20,
  },
  text: {
    fontFamily: st.fontMedium,
    color: st.primaryColor,
    fontSize: 16,
    flex: 1,
  },
  wrp: {
    flex: 1,
    zIndex: 1000,
    elevation: 1000
  }
});

export default style;
