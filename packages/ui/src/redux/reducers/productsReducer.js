import {createReducer} from "@reduxjs/toolkit";
import {addToCart, fetchProductById, fetchProducts, fetchSliderProducts, openCart, selectCategory, subtractProduct} from '../actions/productsAction';

const initialState = {
  data: [],
  sliderProducts: [],
  product: null,
  cart: [],
  category: 'All',
  isCartOpen: false,
  error: null,
  loading: false,
};

const productsReducer = createReducer(initialState, {
  [addToCart.type]: (state, action) => {
    const foundedProduct = state.cart.find(item => item.id === action.payload.id)
    const product = !foundedProduct ? { ...action.payload, count: 1} : { ...action.payload, count: foundedProduct.count+1}
    state.cart = foundedProduct ? state.cart.map(item => item.id === product.id ? product : item) : [...state.cart, product];
  },
  [openCart.type]: (state, action) => {
    state.isCartOpen = action.payload;
  },
  [subtractProduct.type]: (state, action) => {
    const foundedProduct = state.cart.find(item => item.id === action.payload.id)
    state.cart = foundedProduct.count !== 1 ?
      state.cart.map(item => item.id === foundedProduct.id ? {...foundedProduct, count: foundedProduct.count -1} : item)
      : state.cart.filter(item => item.id !== action.payload.id)

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