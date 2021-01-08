import { apiFilter } from "../../api";

const FILTERCATEGORIES_REQUEST = "FILTERCATEGORIES_REQUEST";
const FILTERCATEGORIES_SUCCESS = "FILTERCATEGORIES_SUCCESS";
const FILTERCATEGORIES_FAIL = "FILTERCATEGORIES_FAIL";

const initState = {
  isFetching: false,
  categories: [],
  error: ''
}

const filterCategories = (state = initState, action) => {
  switch (action.type) {
    case FILTERCATEGORIES_REQUEST: {
      return {
        isFetching: true,
        categories: [],
        error: ''
      }
    };
    case FILTERCATEGORIES_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        categories: action.payload,
      }
    };
    case FILTERCATEGORIES_FAIL: {
      return {
        isFetching: false,
        error: action.payload.message,
        categories: []
      }
    }
  };

  return state;
}

export const categoriesGet = (currentLang) => {
  return dispatch => {
    dispatch({ type: FILTERCATEGORIES_REQUEST })
    apiFilter.getCategories(currentLang)
      .then(res => {
        dispatch({ type: FILTERCATEGORIES_SUCCESS, payload: res.data.data.items })
      })
      .catch(error => {
        dispatch({ type: FILTERCATEGORIES_FAIL, payload: error })
      })
  }
}

export default filterCategories;