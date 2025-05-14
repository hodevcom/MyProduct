import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductsState } from './types';


const initialState: ProductsState = {
  products: [],
  page: 1,
  totalPages: 1,
  limit: 6,
  loading: true,
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    fetchProductsRequest: (
      state,
      action: PayloadAction<{
        page: number;
        search?: string;
        minPrice?: number;
        maxPrice?: number;
        sort?: string;
      }>
    ) => {
      state.loading = true;
      state.page = action.payload.page;
    },
    fetchProductsSuccess: (state, action: PayloadAction<{ data: Product[]; totalPages: number }>) => {
      state.products = action.payload.data;
      state.totalPages = action.payload.totalPages;
      state.loading = false;
    },
    fetchProductsFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    addProductRequest: (state, action: PayloadAction<Product>) => {
      state.loading = true;
    },
    addProductSuccess: (state, action: PayloadAction<Product>) => {
      state.loading = false;
    },
    addProductFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
    },
  },
});

export const {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
} = productsSlice.actions;

export default productsSlice.reducer;
