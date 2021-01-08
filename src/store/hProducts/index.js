import { apiHProducts } from "../../api";

const HPRODUCTS_REQUEST = "HPRODUCTS_REQUEST";
const HPRODUCTS_SUCCESS = "HPRODUCTS_SUCCESS";
const HPRODUCTS_FAIL = "HPRODUCTS_FAIL";

const initState = {
  isFetching: false,
  error: '',
  products: []
}

const hProducts = (state = initState, action) => {
  switch (action.type) {
    case HPRODUCTS_REQUEST: {
      return {
        isFetching: true,
        error: '',
        products: []
      }
    };
    case HPRODUCTS_SUCCESS: {
      return {
        isFetching: false,
        error: '',
        products: action.payload
      }
    };
    case HPRODUCTS_FAIL: {
      return {
        isFetching: false,
        error: action.payload.message,
        products: [],
      }
    }
  };

  return state;
}

export const hProductsGet = (currentLang) => {
  return dispatch => {
    dispatch({ type: HPRODUCTS_REQUEST })
    apiHProducts.get(currentLang)
      .then(res => {
        dispatch({ type: HPRODUCTS_SUCCESS, payload: res.data.data.items })
      })
      .catch(error => {
        dispatch({ type: HPRODUCTS_FAIL, payload: error })
      })
  }
}

export default hProducts;