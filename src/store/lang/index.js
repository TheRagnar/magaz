import { apiLang } from "../../api";

const GET_LANG_REQUEST = "GET_LANG_REQUEST";
const GET_LANG_SUCCESS = "GET_LANG_SUCCESS";
const GET_LANG_FAIL = "GET_LANG_FAIL";

const CHANGE_LANG = "CHANGE_LANG";

const initState = {
  isFetching: false,
  errors: "",
  data: [],
  currentLang: 'ru'
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case GET_LANG_REQUEST: {
      return {
        ...state,
        errors: "",
        data: [],
        isFetching: true,
      };
    };
    case GET_LANG_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        errors: "",
        data: action.payload,
      }
    };
    case GET_LANG_FAIL: {
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      }
    };
    case CHANGE_LANG: {
      return {
        ...state,
        currentLang: action.payload,
      }
    }
  };

  return state;
}

export const changeLang = (langTag) => {
  return (dispatch) => {
    dispatch({type: CHANGE_LANG, payload: langTag})
  }
}

export const getStaticFields = (currentLang) => {
  return (dispatch) => {
    dispatch({type: GET_LANG_REQUEST })
    apiLang.getStaticFields(currentLang).then(res => {
      dispatch({type: GET_LANG_SUCCESS, payload: res })
    }).catch(error => {
      console.warn(error);
      dispatch({type: GET_LANG_FAIL, payload: error })
    })
  }
}

export default auth;