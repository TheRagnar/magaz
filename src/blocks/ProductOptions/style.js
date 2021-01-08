import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  options: {
    paddingTop: 35,
    paddingLeft: 20,
    paddingRight: 20,
    marginTop: 35,
    borderTopWidth: 1,
    borderTopColor: "#e4e4e4",
  },
  optionsRow: {
    marginBottom: 40,
  },
  optionsTitle: {
    marginBottom: 20,
    color: "#333",
    fontSize: 18,
    fontFamily: st.fontBold,
    marginBottom: 12,
  },
  optionsOption: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 6,
    marginTop: 6,
    position: "relative",
  },
  optionsOptionLeft: {
    backgroundColor: st.whiteColor,
    paddingRight: 3,
    paddingBottom: 4,
    paddingTop: 4,
    zIndex: 3,
    position: "relative",
  },
  optionsOptionRight: {
    backgroundColor: st.whiteColor,
    paddingLeft: 20,
    zIndex: 3,
    position: "relative",
    paddingBottom: 4,
    paddingTop: 4,
  },
  optionsOptionName: {
    color: "#474950",
    fontSize: 16,
    fontFamily: st.fontRegular,
  },
  optionsOptionText: {
    color: "#474950",
    fontSize: 16,
    fontFamily: st.fontRegular,
  },
  optionsOptionColor: {
    width: 56,
    height: 18,
    borderWidth: 2,
    borderColor: st.whiteColor,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    zIndex: 3,
    shadowOpacity: 0.08,
    shadowRadius: 22,
  },
  line: {
    position: "absolute",
    bottom: 2,
    left: 0,
    right: 0,
    borderWidth: 1,
    borderRadius: 5,
    borderStyle: 'dashed',
    borderColor: '#AEAEAE',
    zIndex: 1,
  },
});

export default style;
