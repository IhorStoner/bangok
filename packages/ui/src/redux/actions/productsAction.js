import { createAsyncThunk, createAction } from "@reduxjs/toolkit"
import axios from '../../axios/axios'

export const addToCart = createAction("ADD_TO_CART");

export const selectCategory = createAction("SELECT_CATEGORY");

export const openCart = createAction("OPEN_CART");

export const subtractProduct = createAction("SUBTRACT_PRODUCT");

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const data = await axios.get(`/products`).then(
    res => res.data);
  return data;
});

export const fetchProductById = createAsyncThunk('fetchProductById', async (id) => {
  const data = await axios.get(`/products/${id}`).then(
    res => res.data);
  return data;
});

export const fetchSliderProducts = createAsyncThunk('fetchSliderProducts', async () => {
  const data = await axios.get(`/sliderProducts`).then(
    res => res.data);
  return data;
});