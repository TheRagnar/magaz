import { apiProducts } from "../../api";

const PRODUCTS_REQUEST = "popular/PRODUCTS_REQUEST";
const PRODUCTS_SUCCESS = "popular/PRODUCTS_SUCCESS";
const PRODUCTS_FAIL = "popular/PRODUCTS_FAIL";
const PRODUCTS_REFRESH_REQUEST = "popular/PRODUCTS_REFRESH_REQUEST";
const PRODUCTS_REFRESH_SUCCESS = "popular/PRODUCTS_REFRESH_SUCCESS";
const PRODUCTS_REFRESH_FAIL = "popular/PRODUCTS_REFRESH_FAIL";

const initState = {
  isFetching: false,
  error: "",
  products: [],
  paginate: {
    current_page: 1
  },
  isRefreshing: false,
}

const popular = (state = initState, action) => {
  switch (action.type) {
    case PRODUCTS_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    };
    case PRODUCTS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: '',
        products: [...state.products, ...action.payload.products ],
        paginate: action.payload.paginate
      }
    };
    case PRODUCTS_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }
    }
    case PRODUCTS_REFRESH_REQUEST: {
      return {
        ...initState,
        isRefreshing: true,
      }
    }
    case PRODUCTS_REFRESH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isRefreshing: false,
        error: '',
        products: action.payload.products,
        paginate: action.payload.paginate
      }
    }
    case PRODUCTS_REFRESH_FAIL: {
      return {
        ...state,
        isFetching: false,
        isRefreshing: false,
        error: action.payload.message
      }
    }
  };

  return state;
}

export default popular;

export const productsGet = (currentLang, page, query) => {
  return dispatch => {
    dispatch({ type: PRODUCTS_REQUEST })
    apiProducts.get(currentLang, page, query)
      .then(res => {
        dispatch({
          type: PRODUCTS_SUCCESS, payload: {
            products: res.data.data.items,
            paginate: res.data.data.paginate
          }
        })
      })
      .catch(error => {
        dispatch({ type: PRODUCTS_FAIL, payload: error })
      })
  }
}

export const productsRefresh = (currentLang, query) => {
  return dispatch => {
    dispatch({ type: PRODUCTS_REFRESH_REQUEST })
    apiProducts.get(currentLang, 1, query)
      .then(res => {
        dispatch({
          type: PRODUCTS_REFRESH_SUCCESS, payload: {
            products: res.data.data.items,
            paginate: res.data.data.paginate
          }
        })
      })
      .catch(error => {
        dispatch({ type: PRODUCTS_REFRESH_FAIL, payload: error })
      })
  }
}