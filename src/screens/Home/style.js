import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  banners: {
    paddingTop: 15,
    paddingBottom: 10,
    ...st.basePadding
  },
  banner: {
    marginBottom: 15,
  },
  products: {
    backgroundColor: st.primaryColor,
    paddingTop: 30,
    paddingBottom: 30
  }
})

export default style;