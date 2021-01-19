import { StyleSheet } from "react-native";
import { st, isIpad } from "../../const";

const style = StyleSheet.create({
  wrapper: {
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: st.whiteColor
  },
  image: {
    width: isIpad ? 140 : 80,
    height: isIpad ? 180 : 105,
  },
  imageWrapper: {
    width: '100%',
    height: isIpad ? 195 : 125,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fcfcfc'
  },
  priceDiscount: {
    paddingLeft: 15,
    color: "#959595",
    textDecorationLine: 'line-through',
    fontFamily: st.fontRegular,
    fontSize: isIpad ? 18 : 12,
  },
  ft: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  name: {
    marginBottom: 15,
    color: st.iconColor,
    fontFamily: st.fontMedium,
    fontSize: isIpad ? 20 : 14,
  },
  price: {
    color: st.iconColor,
    fontFamily: st.fontBold,
    fontSize: isIpad ? 18 : 12,
  },
  content: {
    paddingBottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10
  }
})

export default style;