import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    borderBottomColor: "#DCDCDC",
    borderBottomWidth: 1,
    paddingBottom: 30,
    ...st.basePadding,
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  changeLang: {
    marginLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  currentLang: {
    color: "#474950",
    fontSize: 16,
    fontFamily: st.fontRegular,
    paddingRight: 10
  },
  title: {
    color: "#474950",
    fontSize: 18,
    fontFamily: st.fontBold
  }
})

export default style;