import { createSelector } from '@reduxjs/toolkit'

export const getProducts = createSelector(
  state => state.products,
  products => products.data
);

export const getProduct = createSelector(
  state => state.products,
  products => products.product
);