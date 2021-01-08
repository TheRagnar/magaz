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
  },
  categoryTitle: {
    fontSize: 18,
    fontFamily: st.fontBold,
    color: "#2C2C2C",
    marginBottom: 20
  },
  categoryRowColor: {
    flexDirection: "row",
    flexWrap: "wrap"
  },
  categoryColor: {
    marginBottom: 10,
  }
})

export default style;