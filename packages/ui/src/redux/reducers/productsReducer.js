import { createReducer } from "@reduxjs/toolkit";
import {addToCart, fetchProductById, fetchProducts} from '../actions/productsAction';

const initialState = {
  data: [],
  product: null,
  cart: [],
  error: null,
  loading: false,
};

const productsReducer = createReducer(initialState, {
  [addToCart.type]: (state, action) => {
    state.cart = action.payload;
  },
  [fetchProducts.pending]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchProducts.fulfilled]: (state, action) => {
    state.data = action.payload;
    state.loading = false;
  },
  [fetchProducts.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error;
  },
  [fetchProductById.pending]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchProductById.fulfilled]: (state, action) => {
    state.product = action.payload;
    state.loading = false;
  },
  [fetchProductById.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error;
  },
});

export default productsReducer