import {ITEMS} from '../constants'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import { postItems } from '../api';
import { addItemsSuccess, setError } from '../actions';

function* handleItemsAdd(action){
  try{
    console.log("handleItemsAdd try");
    console.log(action);
    const items = yield call(postItems, action.title, action.excerpt);
    console.log('HIA HEREEEE');
    console.log(items);
    yield put(addItemsSuccess(items));
  }catch(error){
    console.log("handleItemsAdd error");
    yield put(setError(error.toString()));
  }
}

export default function* watchItemsAdd(){
  console.log("WATCH ITEMS ADD");
  yield takeEvery(ITEMS.ADD, handleItemsAdd);

}