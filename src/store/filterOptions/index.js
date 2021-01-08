import { apiFilter } from "../../api";

const FILTEROPTIONS_REQUEST = "FILTEROPTIONS_REQUEST";
const FILTEROPTIONS_SUCCESS = "FILTEROPTIONS_SUCCESS";
const FILTEROPTIONS_FAIL = "FILTEROPTIONS_FAIL";

const initState = {
  isFetching: false,
  options: [],
  error: ''
}

const filterOptions = (state = initState, action) => {
  switch (action.type) {
    case FILTEROPTIONS_REQUEST: {
      return {
        isFetching: true,
        options: [],
        error: ''
      }
    };
    case FILTEROPTIONS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        options: action.payload,
      }
    };
    case FILTEROPTIONS_FAIL: {
      return {
        isFetching: false,
        error: action.payload.message,
        options: []
      }
    }
  };

  return state;
}


export const optionsGet = (currentLang, id) => {
  return dispatch => {
    dispatch({ type: FILTEROPTIONS_REQUEST })
    apiFilter.getOptions(currentLang, id)
      .then(res => {
        dispatch({ type: FILTEROPTIONS_SUCCESS, payload: res.data.data.item.options_and_values })
      })
      .catch(error => {
        dispatch({ type: FILTEROPTIONS_FAIL, payload: error })
      })
  }
}

export default filterOptions;