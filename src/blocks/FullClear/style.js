import { StyleSheet } from "react-native";

import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "#fff",
    ...st.basePadding,
    justifyContent: "flex-end",
    paddingTop: 30,
    flex: 1,
    paddingBottom: 30,
  },
  icon: {
    marginBottom: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#1E385B",
    textAlign: "center",
    fontSize: 20,
    fontFamily: st.fontBold,
  },
  footer: {
    marginTop: 60
  },
  text: {
    marginTop: 20,
    fontSize: 14,
    fontFamily: st.fontRegular,
    color: "#777",
    textAlign: "center"
  },
  button: {
    marginTop: 5,
    marginBottom: 5,
  }
});

export default style;
