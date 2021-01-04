import {USER} from '../constants'
import {call, put, takeEvery, fork} from 'redux-saga/effects'
import { loginUser } from '../api';
import { setUser, setError } from '../actions';

function* handleLoginUser(action){
  try{
    console.log("handleLoginUser try");
    console.log(action);
    const user = yield call(loginUser, action.user);
    console.log('HIA HEREEEE');
    console.log(user);
    yield put(setUser(user));
  }catch(error){
    console.log("handleLoginUser error");
    yield put(setError(error.toString()));
  }
}

export default function* watchLoginUser(){
  console.log("WATCH USER LOGIN");
  yield takeEvery(USER.LOGIN, handleLoginUser);

}