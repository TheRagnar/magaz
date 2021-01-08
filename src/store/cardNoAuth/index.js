import { apiBasket } from "../../api";

export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_PRODUCTS_SUNHRON = "SET_PRODUCTS_SUNHRON";



const initState = {
  cards: [],
  isSynch: true,
}

const cardNoAuth = (state = initState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        isSynch: false,
        cards: action.payload
      }
    };
    case SET_PRODUCTS_SUNHRON: {
      return {
        isSynch: true,
        cards: []
      }
    } 
  };

  return state;
}

export default cardNoAuth;

export const addProduct = (id, count) => {
  return (dispatch, getState) => {
    let newArr;
    if(getState().cardNoAuth.cards.find(item => {return item.id === id})) {
      newArr = getState().cardNoAuth.cards.map((item) => {
        if(item.id === id) {
          item.count = item.count + count
        }
        return item;
      })
    } else {
      newArr = [...getState().cardNoAuth.cards, {
        id: id,
        count: count
      }]
    }
    dispatch({ type: SET_PRODUCTS, payload: newArr})
  }
}

export const removeProduct = (id, count) => {
  return (dispatch, getState) => {
    let newArr;

    newArr = getState().cardNoAuth.cards.map((item)=>{
      if(item.id === id) {
        item.count = item.count - count;
      }
      return item;
    })
    newArr = newArr.filter((item) => {
      return item.count > 0
    })

    dispatch({ type: SET_PRODUCTS, payload: newArr})
  }
}

export const clear = () => {
  return (dispatch, getState) => {
    dispatch({ type: SET_PRODUCTS, payload: []})
  }
}

export const synchronize = (currentLang, token) => {
  return (dispatch, getState) => {
    let data = {};
    getState().cardNoAuth.cards.forEach(element => {
      data[element.id] = {
        product_id: element.id,
        count: element.count
      }
    });
    apiBasket.synchronize(currentLang, token, data).then(res => {
      if(res.data.operation.code === 200) {
        dispatch({ type: SET_PRODUCTS_SUNHRON})
      } else {
        console.warn(res.data.operation.message)
      }
    }).catch(error => {
      console.warn(error)
    })
  }
}