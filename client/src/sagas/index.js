import itemsSaga from './itemsSaga';
import addItemsSaga from './addItemsSaga';
import deleteItemsSaga from './deleteItemsSaga';
import { all } from 'redux-saga/effects';

// watcher saga -> actions -> worker saga

export default function* rootSaga() {
  yield all([itemsSaga(), addItemsSaga(), deleteItemsSaga()]);
}