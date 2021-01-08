import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  options: {
    ...st.basePadding,
  },
  categories: {
    marginBottom: 25,
  },
  category: {
    marginBottom: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: st.fontBold,
    color: "#2C2C2C",
    marginBottom: 20,
  },
  categoryRowColor: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  categoryColor: {
    marginBottom: 10,
  },
  categoryIcon: {
    width: 28,
    height: 28,
    marginRight: 14,
  },
  categoryText: {
    fontSize: 18,
    color: "#949494",
    fontFamily: st.fontRegular,
  },
  categoryActive: {
    position: "relative",
  },
  categoryTextActive: {
    color: "#474950",
    fontFamily: st.fontMedium,
  }
});

export default style;
