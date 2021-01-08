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
  input: {
    marginBottom: 20
  },
  content: {
    ...st.basePadding
  },
  error: {
    fontFamily: st.fontRegular,
    color: "#FF2E2E",
    fontSize: 12,
  }
});

export default style;
