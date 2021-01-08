import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: st.primaryColor
  },
  logo: {
    marginTop: 80,
    justifyContent: "center",
    alignItems: "center"
  },
  info: {
    height: 40,
    justifyContent: "center",
    marginTop: 30
  },
  center: {
    color: "#7C88B1",
    textAlign: "center",
    fontSize: 16,
    fontFamily: st.fontRegular
  },
  link: {
    color: st.whiteColor,
    fontFamily: st.fontMedium
  },
  button: {
    marginTop: 60
  },
  reset: {
    position: "absolute",
    bottom: -40,
    right: 0,
    fontSize: 16,
    color: "#D2D9F0",
    fontFamily: st.fontRegular
  },
  text: {
    textAlign: "center",
    fontSize: 12,
    lineHeight: 14,
    fontFamily: st.fontBold,
    color: st.whiteColor,
    paddingLeft: 60,
    paddingRight: 60,
    marginTop: 20
  },
  title: {
    color: st.whiteColor,
    textAlign: "center"
  },
  fields: {
    marginTop: 40
  },
  errorText: {
    color: "#FF2E2E"
  },
  error: {
    paddingTop: 20
  }
})

export default style;