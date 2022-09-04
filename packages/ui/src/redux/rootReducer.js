//rootReducer.js
import { combineReducers } from '@reduxjs/toolkit'
import productsReducer from './reducers/productsReducer'

export default combineReducers({
  products: productsReducer,
})