import { apiCategories } from "../../api";

export const CATEGORIES_REQUEST = "CATEGORIES_REQUEST";
export const CATEGORIES_SUCCESS = "CATEGORIES_SUCCESS";
export const CATEGORIES_FAIL = "CATEGORIES_FAIL";
export const CATEGORIES_REFRESH_REQUEST = "CATEGORIES_REFRESH_REQUEST";
export const CATEGORIES_REFRESH_SUCCESS = "CATEGORIES_REFRESH_SUCCESS";
export const CATEGORIES_REFRESH_FAIL = "CATEGORIES_REFRESH_FAIL";



const initState = {
  isFetching: false,
  error: "",
  categories: [],
  paginate: {
    current_page: 1
  },
  isRefreshing: false,
}

const categories = (state = initState, action) => {
  switch (action.type) {
    case CATEGORIES_REQUEST: {
      return {
        ...state,
        isFetching: true,
        error: '',
      }
    };
    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        error: '',
        categories: [...state.categories, ...action.payload.categories, ],
        paginate: action.payload.paginate
      }
    };
    case CATEGORIES_FAIL: {
      return {
        ...state,
        isFetching: false,
        error: action.payload.message
      }
    }
    case CATEGORIES_REFRESH_REQUEST: {
      return {
        ...initState,
        isRefreshing: true,
      }
    }
    case CATEGORIES_REFRESH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isRefreshing: false,
        error: '',
        categories: action.payload.categories,
        paginate: action.payload.paginate
      }
    }
    case CATEGORIES_REFRESH_FAIL: {
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

export default categories;




export const categoriesGet = (currentLang, page) => {
  return dispatch => {
    dispatch({ type: CATEGORIES_REQUEST })
    apiCategories.get(currentLang, page)
      .then(res => {
        dispatch({
          type: CATEGORIES_SUCCESS, payload: {
            categories: res.data.data.items,
            paginate: res.data.data.paginate
          }
        })
      })
      .catch(error => {
        dispatch({ type: CATEGORIES_FAIL, payload: error })
      })
  }
}

export const categoriesRefresh = (currentLang) => {
  return dispatch => {
    dispatch({ type: CATEGORIES_REFRESH_REQUEST })
    apiCategories.get(currentLang, 1)
      .then(res => {
        dispatch({
          type: CATEGORIES_REFRESH_SUCCESS, payload: {
            categories: res.data.data.items,
            paginate: res.data.data.paginate
          }
        })
      })
      .catch(error => {
        dispatch({ type: CATEGORIES_REFRESH_FAIL, payload: error })
      })
  }
}