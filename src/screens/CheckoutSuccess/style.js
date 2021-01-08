import { StyleSheet } from "react-native";
import { st } from "../../const";

const style = StyleSheet.create({
  header: {
    paddingTop: 25,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerTitle: {
    textAlign: "center",
    fontFamily: st.fontBold,
    color: "#474950",
    fontSize: 18
  },
  wrapper: {
    backgroundColor: "#fff",
    ...st.basePadding,
    justifyContent: "flex-end",
    paddingTop: 30,
    flex: 1,
    paddingBottom: 40,
  },
  icon: {
    marginBottom: 60,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    color: "#1E385B",
    textAlign: "center",
    fontSize: 20,
    fontFamily: st.fontBold,
  },
  footer: {
    marginTop: 100
  }
})

export default style;