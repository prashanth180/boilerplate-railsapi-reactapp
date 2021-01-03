import {ITEMS} from '../constants'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import { fetchItems, postItems } from '../api';
import { setItems, addItemsSuccess, setError } from '../actions';

function* handleItemsLoad(){
  try{
    console.log("handleItemsLoad try");
    const items = yield call(fetchItems);
    console.log('HEREEEE');
    console.log(items);
    yield put(setItems(items));
  }catch(error){
    console.log("handleItemsLoad error");
    yield put(setError(error.toString()));
  }
}

export default function* watchItemsLoad(){
  console.log("WATCH ITEMS LOAD");
  yield takeEvery(ITEMS.LOAD, handleItemsLoad)
}