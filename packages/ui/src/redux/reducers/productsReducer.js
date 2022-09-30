import { createReducer } from "@reduxjs/toolkit";
import {addToCart, fetchProductById, fetchProducts, fetchSliderProducts, selectCategory} from '../actions/productsAction';

const initialState = {
  data: [],
  sliderProducts: [],
  product: null,
  cart: [],
  category: 'All',
  error: null,
  loading: false,
};

const productsReducer = createReducer(initialState, {
  [addToCart.type]: (state, action) => {
    state.cart = [...state.cart , action.payload];
  },
  [selectCategory.type]: (state, action) => {
    state.category = action.payload;
  },
  [fetchSliderProducts.pending]: (state) => {
    state.loading = true;
    state.error = null;
  },
  [fetchSliderProducts.fulfilled]: (state, action) => {
    state.sliderProducts = action.payload;
    state.loading = false;
  },
  [fetchSliderProducts.rejected]: (state, action) => {
    state.loading = false;
    state.error = action.error;
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