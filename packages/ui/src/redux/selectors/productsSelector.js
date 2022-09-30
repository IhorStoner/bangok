import { createSelector } from '@reduxjs/toolkit'

export const getProducts = createSelector(
  state => state.products,
  products => products.data
);

export const getSelectedCategory = createSelector(
  state => state.products,
  products => products.category
);

export const getFilteredProducts = createSelector(
  getProducts,
  getSelectedCategory,
  (products, selectedCategory) => products.filter(item => {
    if(selectedCategory === 'All') {
      return item
    } else if(item.category === selectedCategory){
      return item
    }
    return null
  })
);

export const getProduct = createSelector(
  state => state.products,
  products => products.product
);

export const getSliderProducts = createSelector(
  state => state.products,
  products => products.sliderProducts
);

export const getCart = createSelector(
  state => state.products,
  products => products.cart
);

export const getCartSum = createSelector(
  getCart,
  (cart) => cart.reduce((acc,item) => item.price + acc, 0)
);

