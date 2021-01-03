import { call, put, take, takeEvery } from 'redux-saga/effects';
import { USER } from '../constants';

function* workerSaga(){
  console.log('worker saga');
  console.log(put({type: 'ACTION_WORKER'}));
  yield put({type: 'ACTION_WORKER'});
}

function* loginSaga(){
  console.log('login saga');
  console.log(put({type: 'USER_LOGIN'}));
  yield put({type: 'USER_LOGIN'});
}

function* logoutSaga(){
  console.log('logout saga');
  console.log(put({type: 'USER_LOGOUT'}));
  yield put({type: 'USER_LOGOUT'});
}

function* postLoginSaga(){
  console.log('This is called only after a successful login');
  console.log(put({type: 'ACTION_POST_LOGIN'}));
  yield put({type: 'ACTION_POST_LOGIN'});
}


// watcher saga
function* rootSaga(){
  //takeEvery can be called multiple times, take is called only once, anything between take actions is called only after previous take action
  yield take(USER.LOGIN);
  yield call(loginSaga);
}
// watcher saga -> actions -> worker saga
export default rootSaga;