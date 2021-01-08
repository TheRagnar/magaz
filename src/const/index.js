import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const url = "https://vicalina.dev-swift.ru/api/v1";
export const assets = "https://vicalina.dev-swift.ru";
export const clientId = "1";
export const clientSecret = "8OJuZMJIZuDgtlVAAZakiUotKYpyJ9m8M2JwT4C3";
export const grandType = "password";

export const pixelRatio = (defaultWidth, defaultHeight, padding) => {
  let totalWidth = width;
  if (padding) {
    totalWidth = totalWidth - padding;
  }
  let totalHeight = (defaultHeight * totalWidth) / defaultWidth;
  return {
    width: totalWidth,
    height: totalHeight,
  };
};

export const st = {
  borderRadius: 4,
  primaryColor: "#1e42a0",
  secondaryColor: "#F9D145",
  whiteColor: "#ffffff",
  blackColor: "#000000",
  textColor: "#333333",
  iconColor: "#474950",
  titleColor: "#1E385B",
  doubleColor: "#DDE7EC",
  doubleTextColor: "#738E9B",
  grColor: "#9A9A9A",
  fontRegular: "roboto-regular",
  fontMedium: "roboto-medium",
  fontBold: "roboto-bold",
  fontBlack: "roboto-black",
  basePadding: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  baseShadow: {
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 22,
    backgroundColor: '#fff'
  },
  iconPadding: {
    paddingTop: 15,
  },
};

export const bs = StyleSheet.create({
  fullWrapper: {
    flex: 1,
    backgroundColor: st.primaryColor,
    paddingBottom: 50,
    ...st.basePadding,
    paddingTop: 50,
    backgroundColor: st.whiteColor
  },
  wrapper: {
    backgroundColor: st.whiteColor
  },
  coreBottom: {
    justifyContent: "flex-end",
    flex: 1,
  },
  title: {
    fontFamily: st.fontBold,
    fontSize: 18
  },
  input: {
    marginBottom: 20,
  },
  header: {
    backgroundColor: st.primaryColor
  },
  clear: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 60
  },
  clearIcon: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 50
  },
  clearContent: {
    ...st.basePadding
  },
  clearTitle: {
    color: "#1E385B",
    fontSize: 20,
    fontFamily: st.fontBold,
    textAlign: "center",
    marginBottom: 15,
  },
  clearText: {
    paddingLeft: 50,
    paddingRight: 50,
    color: "#777",
    fontSize: 14,
    lineHeight: 16,
    textAlign: "center",
  },
  clearButton: {
    marginTop: 80,
    ...st.basePadding
  },  
  sheetHeader: {
    paddingTop: 35,
    paddingBottom: 35,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },
  sheetTitle: {
    color: "#333",
    fontFamily: st.fontBold,
    fontSize: 18,
  },
  sheetIconClose: {
    marginLeft: 20
  },
  error: {
    fontFamily: st.fontRegular,
    color: "#FF2E2E",
    fontSize: 12,
  }
});

export const wrappers = {
  Home: "HomeWrapper",
  Dinner: "DinnerWrapper",
  Card: "CardWrapper",
  Profile: "ProfileWrapper",
  Tab: "TabWrapper",
  General: "GeneralWrapper"
};
export const screens = {
  Auth: "AuthScreen",
  Card: "CardScreen",
  Checkout: "CheckoutScreen",
  CheckoutView: "CheckoutViewScreen",
  CheckoutSuccess: "CheckoutSuccessScreen",
  Categories: "CategoriesScreen",
  Fav: "FavScreen",
  Filter: "FilterScreen",
  History: "HistoryScreen",
  Home: "HomeScreen",
  Order: "OrderScreen",
  Product: "ProductScreen",
  Products: "ProductsScreen",
  Profile: "ProfileScreen",
  Reg: "RegScreen",
  Restore: "RestoreScreen",
};


export const getHeader = (currentLang, token = null, contentType = null) => {
  if (token) {
    if(contentType) {
      return {
        headers: {
          'Accept-Language': currentLang,
          'Authorization': `Bearer ${token}`,
          'content-type': 'application/json'
        }
      }
    }
    return {
      headers: {
        'Accept-Language': currentLang,
        'Authorization': `Bearer ${token}`
      }
    }
  }
  return {
    headers: {
      'Accept-Language': currentLang,
    }
  }
}