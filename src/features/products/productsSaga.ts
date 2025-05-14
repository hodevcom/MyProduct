import { call, put, takeLatest } from '@redux-saga/core/effects';
import {
  fetchProductsFailure,
  fetchProductsRequest,
  fetchProductsSuccess,
  addProductRequest,
  addProductSuccess,
  addProductFailure,
} from './productsSlice';
import { PayloadAction } from '@reduxjs/toolkit';
import { Product, ProductFilter } from './types';
import { SagaIterator } from '@redux-saga/core';

function* handleFetchProducts(action: PayloadAction<ProductFilter>): SagaIterator {
  try {
    const { page, search, minPrice, maxPrice, sort } = action.payload;
    const params = new URLSearchParams({
      page: String(page),
      limit: '6',
    });

    if (search) params.append('search', search);
    if (minPrice !== undefined) params.append('minPrice', String(minPrice));
    if (maxPrice !== undefined) params.append('maxPrice', String(maxPrice));
    if (sort) params.append('sort', sort);

    const res = yield call(fetch, `/api/products?${params.toString()}`);
    const data = yield res.json();

    yield put(fetchProductsSuccess({
      data: data.data,
      totalPages: data.meta.totalPages,
    }));
  } catch (error: any) {
    yield put(fetchProductsFailure(error.message));
  }
}

function* addProductSaga(action: PayloadAction<Product>): SagaIterator {
  try {
    const res: Response = yield call(fetch, '/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(action.payload),
    });

    if (!res.ok) throw new Error('Erro na API');

    const product: Product = yield call([res, 'json']);
    yield put(addProductSuccess(product));
  } catch (error: any) {
    yield put(addProductFailure(error.message));
  }
}

export function* watchAddProduct() {
  yield takeLatest(addProductRequest.type, addProductSaga);
}

export function* watchProductsSaga() {
  yield takeLatest(fetchProductsRequest.type, handleFetchProducts);
}
