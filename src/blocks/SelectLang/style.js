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
  item: {
    height: 68,
    flexDirection: "row",
    alignItems: "center",
    ...st.basePadding
  },
  itemActive: {
    backgroundColor: "#E3E3E3"
  },
  itemText: {
    fontSize: 16,
    fontFamily: st.fontRegular,
    color: "#474950"
  },
  itemTextActive: {
    fontFamily: st.fontBold
  },
});

export default style;
