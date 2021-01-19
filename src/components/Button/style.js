import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    height: isIpad ? 80 : 67,
    borderRadius: st.borderRadius,
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  text: {
    textAlign: "center",
    fontSize: isIpad ? 20 : 16,
    color: st.iconColor
  },
  "text-secondary": {
    color: st.iconColor,
  },
  "type-secondary": {
    backgroundColor: st.secondaryColor,
  },

  "text-white": {
    color: st.iconColor,
  },
  "type-white": {
    backgroundColor: st.whiteColor,
  },

  "text-double": {
    color: st.doubleTextColor,
  },
  "type-double": {
    backgroundColor: st.doubleColor,
  }
})

export default style;