import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  header: {
    paddingBottom: 15,
  },
  btn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DEDEDE"
  },
  controls: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: 15,
  },
  price: {
    color: "#333333",
    fontSize: 18,
    fontFamily: st.fontBold,
    marginLeft: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 12,
  },
  title: {
    color: "#333333",
    fontSize: 18,
    fontFamily: st.fontBold
  },
  btnText: {
    fontSize: 22,
    fontFamily: st.fontBold,
    color: "#474950",
    textAlign: "center"
  },
  product: {
    ...st.basePadding
  },
  count: {
    width: 50,
    textAlign: "center",
    fontSize: 22,
    fontFamily: st.fontBold,
    color: "#474950"
  }
})

export default style;