import { combineReducers } from "redux";
import auth from "./auth";
import lang from "./lang";
import hProducts from "./hProducts";
import hCategories from "./hCategories";
import filterCategories from "./filerCategories";
import filter from "./filter";
import filterOptions from "./filterOptions";
import categories from "./categories";
import products from "./products";
import cardNoAuth from "./cardNoAuth";
import popular from "./popular";

const rootReducer = combineReducers({
  auth: auth,
  lang: lang,
  hProducts: hProducts,
  hCategories: hCategories,
  filterCategories: filterCategories,
  filter: filter,
  filterOptions: filterOptions,
  categories: categories,
  products: products,
  cardNoAuth: cardNoAuth,
  popular: popular,
});

export default rootReducer;
