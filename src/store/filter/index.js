const FILTER_CLEAR = "FILTER_CLEAR";
const FILTER_SETOPTIONS = "FILTER_SETOPTIONS";
const FILTER_SETKEYWORD = "FILTER_SETKEYWORD";

const initState = {
  keyword: false,
  options: {}
}

const filter = (state = initState, action) => {
  switch (action.type) {
    case FILTER_CLEAR: {
      return {
        keyword: false,
        options: {},
      }
    };
    case FILTER_SETOPTIONS: {
      return {
        ...state,
        options: action.payload
      }
    };
    case FILTER_SETKEYWORD: {
      return {
        ...state,
        keyword: action.payload
      }
    }
  };

  return state;
}


export const clearFilter = () => {
  return dispatch => {
    dispatch({ type: FILTER_CLEAR });
  }
}


export const setFilterOptions = (options) => {
  return dispatch => {
    let total = {};
    options.forEach((item) => {
      if(total[item.option_id]) {
        total[item.option_id] = [...total[item.option_id], item.id]
      } else {
        total[item.option_id] = [item.id]
      }
    })
    dispatch({ type: FILTER_SETOPTIONS, payload: total });
  }
}

export const setFilterKeyword = (keyword) => {
  return dispatch => {
    dispatch({ type: FILTER_SETKEYWORD, payload: keyword });
  }
}

export default filter;