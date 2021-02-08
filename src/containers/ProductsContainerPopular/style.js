import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  lists: {
    flex: 1,
  },
  item: {
    marginBottom: 20,
    ...st.basePadding
  },
  headerList: {
    ...st.basePadding,
    paddingBottom: 15,
    paddingTop: 20
  },
  header: {
    position: "relative",
    marginBottom: 30,
    zIndex: 1,
  },
  input: {
    backgroundColor: st.whiteColor,
    height: 58,
    borderRadius: st.borderRadius,
    ...st.baseShadow,
    paddingLeft: 20,
    paddingRight: 70,
    fontSize: 16,
    zIndex: 1,
    position: "relative"
  },
  searchButton: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
    elevation: 50,
    shadowColor: "#ffffff"
  },
  filterButton: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  filter: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  filterText: {
    marginLeft: 10,
    fontFamily: st.fontMedium,
    fontSize: 16,
    color: "#9A9A9A"
  },
  tox: {
    textAlign: "center",
    fontFamily: st.fontBold,
    fontSize: 15,
  },
  clear: {
    ...st.basePadding,
    paddingTop: 30,
    paddingBottom: 30,
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
  },
  clearIcon: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 15,
  },
  clearTitle: {
    fontSize: 20,
    fontFamily: st.fontBold,
    textAlign: "center",
    color: st.primaryColor,
    marginBottom: 15,
  },
  clearText: {
    fontSize: 14,
    color: "#666",
    fontFamily: st.fontRegular,
    textAlign: "center",
    paddingLeft: 20,
    paddingRight: 20
  }
})

export default style;