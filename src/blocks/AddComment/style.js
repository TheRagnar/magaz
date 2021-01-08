import { StyleSheet } from "react-native";

import { st } from "../../const";

const style = StyleSheet.create({
  header: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  title: {
    color: "#333",
    fontFamily: st.fontBold,
    fontSize: 18,
  },
  iconClose: {
    marginLeft: 20
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  field: {
    ...st.baseShadow,
    paddingLeft: 25,
    paddingRight: 25,
    paddingTop: 25,
    paddingBottom: 25,
    height: 200,
    borderRadius: 5,
    textAlignVertical: "top"
  },
  button: {
    marginTop: 15,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30
  },
  el: {
    marginBottom: 20,
    textAlign: "center",
    fontSize: 18,
    fontFamily: st.fontBold,
    color: "#333"
  }
});

export default style;
