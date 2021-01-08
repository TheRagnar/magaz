import axios from "axios";
import { url, clientId, clientSecret, grandType, getHeader } from "../const";


const apiAuth = {
  authIn: (currentLang, username, password) => {
    const data = {
      grant_type: grandType,
      username: username,
      password: password,
      client_id: clientId,
      client_secret: clientSecret,
      scope: '*'
    }
    return axios.post(`${url}/oauth/token`, data, getHeader(currentLang))
  },
  registration: (currentLang, email, password) => {
    return axios.post(`${url}/private/registration`, { email: email, password: password, password_confirmation: password }, getHeader(currentLang))
  },
}

const apiLang = {
  getStaticFields: (currentLang) => {
    return new Promise((resolve, reject) => {
      axios.get(`${url}/static_fields`, getHeader(currentLang)).then(res => {
        let items = res.data.data.items;
        resolve(items.reduce((previousValue, currentItem, index) => {
          if (index === 1) {
            return {
              [currentItem.name]: currentItem.value
            }
          } else {
            return {
              ...previousValue,
              [currentItem.name]: currentItem.value
            }
          }
        }))
      }).catch(error => {
        reject(error)
      })
    })
  }
}

const apiHProducts = {
  get: (currentLang) => {
    return axios.get(`${url}/products?paginate.page=0&paginate.per-page=9`, getHeader(currentLang));
  },
}

const apiHCategories = {
  get: (currentLang) => {
    return axios.get(`${url}/categories?paginate.page=0&paginate.per-page=4`, getHeader(currentLang));
  },
}

const apiProduct = {
  getProduct: (currentLang, id, token) => {
    if(token) {
      return axios.get(`${url}/products/${id}?with.get-options=true&with.comments=true`, getHeader(currentLang, token));
    } else {
      return axios.get(`${url}/products/${id}?with.get-options=true&with.comments=true`, getHeader(currentLang));
    }
  }
}

const apiComments = {
  addComments: (currentLang, token, id, text) => {
    return axios.post(`${url}/private/comments/add`, {
      product_id: id,
      text: text,
    }, getHeader(currentLang, token));
  }
}

const apiProfile = {
  getInfo: (currentLang, token) => {
    return axios.get(`${url}/private/user_info`, getHeader(currentLang, token));
  },
  changePassword: (currentLang, token, password, new_password, new_password_confirmation) => {
    return axios.post(`${url}/private/password/reset`, { password: password, new_password: new_password, new_password_confirmation: new_password_confirmation }, getHeader(currentLang, token));
  },
  changeInfo: (currentLang, token, data) => {
    return axios.post(`${url}/private/user/change`, data, getHeader(currentLang, token));
  },
  changeEmail: (currentLang, token, email) => {
    return axios.post(`${url}/private/user/change_email`, { email: email }, getHeader(currentLang, token));
  },
  getHistory: (currentLang, token, id, page) => {
    return axios.get(`${url}/orders?has.user.id=${id}&paginate.page=${page}&paginate.per-page=10`, getHeader(currentLang, token));
  },
  zhaloba: (currentLang, token, orderId, text, type) => {
    return axios.post(`${url}/private/orders/problem`, { order_id: orderId, text: text, type: type }, getHeader(currentLang, token));
  }
}

const apiFav = {
  getFav: (currentLang, token) => {
    return axios.get(`${url}/private/favorites/get`, getHeader(currentLang, token));
  },
  addFav: (currentLang, token, product_id) => {
    return axios.post(`${url}/private/favorites/add`, {product_id:product_id}, getHeader(currentLang, token));
  },
  deleteFav: (currentLang, token, product_id) => {
    return axios.post(`${url}/private/favorites/delete`, {product_id:product_id}, getHeader(currentLang, token));
  }
}

const apiBasket = {
  addCard: (currentLang, token, product_id, count) => {
    return axios.post(`${url}/private/basket/add`, {product_id:product_id, count: count}, getHeader(currentLang, token));
  },
  getCard: (currentLang, token) => {
    return axios.get(`${url}/private/basket/get`, getHeader(currentLang, token));
  },
  removeCard: (currentLang, token, product_id, count) => {
    return axios.post(`${url}/private/basket/delete`, {product_id:product_id, count: count}, getHeader(currentLang, token));
  },

  synchronize: (currentLang, token, data) => {
    return axios.post(`${url}/private/basket/sync`, data, getHeader(currentLang, token, true));
  }
}

const apiCheckout = {
  by: (currentLang, token, data) => {
    return axios.post(`${url}/private/checkout`, data, getHeader(currentLang, token))
  }
}

const apiFilter = {
  getCategories: (currentLang) => {
    return axios.get(`${url}/categories?paginate.page=1&paginate.per-page=100`, getHeader(currentLang));
  },
  getOptions: (currentLang, id) => {
    return axios.get(`${url}/categories/${id}?with.get-options-and-values=true`, getHeader(currentLang));
  }
}

const apiCategories = {
  get: (currentLang, page) => {
    return axios.get(`${url}/categories?paginate.page=${page}&paginate.per-page=10`, getHeader(currentLang));
  },
}


const apiProducts = {
  get: (currentLang, page, query) => {
    return axios.get(`${url}/products?paginate.page=${page}&paginate.per-page=10${query}`, getHeader(currentLang));
  },
  getCards: (currentLang, arr) => {
    return axios.get(`${url}/products?paginate.page=0&paginate.per-page=500&search.id.(in)=${arr}`, getHeader(currentLang));
  },
}


export {
  apiAuth,
  apiLang,
  apiHProducts,
  apiHCategories,
  apiProduct,
  apiComments,
  apiProfile,
  apiFav,
  apiBasket,
  apiCheckout,
  apiFilter,
  apiCategories,
  apiProducts
}