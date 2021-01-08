import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {},
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 50,
    ...st.basePadding,
    paddingTop: 60,
  },
  headerTitle: {
    color: "#333",
    fontSize: 18,
    fontFamily: st.fontBold,
  },
  footer: {
    marginTop: 35,
    ...st.basePadding,
    paddingBottom: 40,
  },
  btn: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
    paddingBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    textAlign: "center",
    fontFamily: st.fontMedium,
    color: "#474950",
    fontSize: 16,
  },
});

export default style;
