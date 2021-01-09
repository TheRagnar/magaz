import { apiAuth } from "../../api";
const GET_AUTHIN_REQUEST = "GET_AUTHIN_REQUEST";
const GET_AUTHIN_SUCCESS = "GET_AUTHIN_SUCCESS";
const GET_AUTHIN_FAIL = "GET_AUTHIN_FAIL";
const LOGOUT = "LOGOUT";

const initState = {
  authIn: false,
  isFetching: false,
  token: false,
  errors: false,
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTHIN_REQUEST: {
      return {
        ...initState,
        isFetching: true
      };
    };
    case GET_AUTHIN_SUCCESS: {
      return {
        isFetching: false,
        errors: false,
        token: action.payload,
        authIn: true
      }
    };
    case GET_AUTHIN_FAIL: {
      return {
        ...state,
        isFetching: false,
        errors: action.payload,
      }
    }
    case LOGOUT: {
      return initState
    }
  };

  return state;
}

export const autorize = (currentLang, email, password) => {
  return (dispatch) => {
    dispatch({type: GET_AUTHIN_REQUEST })
    apiAuth.authIn(currentLang, email, password).then(res => {
      dispatch({type: GET_AUTHIN_SUCCESS, payload: res.data.access_token })
    }).catch(error => {
      dispatch({type: GET_AUTHIN_FAIL, payload: error })
      console.warn(error);
    })
  }
}

export const authAfterReg = (access_token) => {
  return (dispatch) => {
    dispatch({type: GET_AUTHIN_SUCCESS, payload: access_token })
  }
}

export const logOut = () => {
  return (dispatch) => {
    dispatch({type: LOGOUT })
  }
}


export default auth;