import {ITEMS} from '../constants'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import { deleteItems } from '../api';
import { deleteItemsSuccess, setError } from '../actions';

function* handleItemsDelete(action){
  try{
    console.log("handleItemsRemove try");
    console.log(action);
    const items = yield call(deleteItems, action.id);
    console.log('HIA HEREEEE');
    console.log(action.id);
    console.log(put(deleteItemsSuccess(action.id)));
    console.log('-------');
    yield put(deleteItemsSuccess(action.id));
  }catch(error){
    console.log("handleItemsRemove error");
    yield put(setError(error.toString()));
  }
}

export default function* watchItemsDelete(){
  console.log("WATCH ITEMS DELETE");
  yield takeEvery(ITEMS.DELETE, handleItemsDelete);

}