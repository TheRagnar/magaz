import { combineReducers } from 'redux'
import langReducer from './langReducer'

const rootReducer = combineReducers({
  lang: langReducer
})

export default rootReducer
