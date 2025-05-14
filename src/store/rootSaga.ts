import { all } from 'redux-saga/effects';
import { watchAddProduct, watchProductsSaga } from '@/features/products/productsSaga';

export default function* rootSaga() {
  yield all([watchProductsSaga(), watchAddProduct()]);
}