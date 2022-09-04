import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "./rootReducer";

// eslint-disable-next-line
export default () => {
  return configureStore({
    reducer: rootReducer,
    devTools: true,
  })
};