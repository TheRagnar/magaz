import { StyleSheet } from "react-native";

import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
    paddingTop: 10,
  },
  itemHeadedr: {
    marginBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flex: 1,
  },
  item: {
    marginBottom: 25,
    flex: 1,
  },
  itemName: {
    color: "#333",
    fontSize: 18,
    fontFamily: st.fontBold,
    flex: 1,
  },
  title: {
    color: "#333",
    fontSize: 18,
    fontFamily: st.fontBold,
    marginBottom: 25,
  },
  itemDate: {
    color: "#474950",
    fontSize: 16,
    fontFamily: st.fontRegular,
    paddingTop: 3,
    paddingLeft: 10
  },
  itemText: {
    color: "#474950",
    fontSize: 16,
    fontFamily: st.fontRegular,
  },
});

export default style;
