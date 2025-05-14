import { all } from '@redux-saga/core/effects';
import { watchAddProduct, watchProductsSaga } from '@/features/products/productsSaga';

export default function* rootSaga() {
  yield all([watchProductsSaga(), watchAddProduct()]);
}