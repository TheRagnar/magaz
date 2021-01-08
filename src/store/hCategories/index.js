import { apiHCategories } from "../../api";

const HCATEGORIES_REQUEST = "HCATEGORIES_REQUEST";
const HCATEGORIES_SUCCESS = "HCATEGORIES_SUCCESS";
const HCATEGORIES_FAIL = "HCATEGORIES_FAIL";

export const hCategoriesGet = (currentLang) => {
  return dispatch => {
    dispatch({ type: HCATEGORIES_REQUEST })
    apiHCategories.get(currentLang)
      .then(res => {
        dispatch({ type: HCATEGORIES_SUCCESS, payload: res.data.data.items })
      })
      .catch(error => {
        dispatch({ type: HCATEGORIES_FAIL, payload: error })
      })
  }
}

const initState = {
  isFetching: false,
  error: "",
  categories: []
}

const hCategories = (state = initState, action) => {
  switch (action.type) {
    case HCATEGORIES_REQUEST: {
      return {
        isFetching: true,
        error: '',
        categories: []
      }
    };
    case HCATEGORIES_SUCCESS: {
      return {
        isFetching: false,
        error: '',
        categories: action.payload
      }
    };
    case HCATEGORIES_FAIL: {
      return {
        isFetching: false,
        error: action.payload.message,
        categories: [],
      }
    }
  };

  return state;
}

export default hCategories;