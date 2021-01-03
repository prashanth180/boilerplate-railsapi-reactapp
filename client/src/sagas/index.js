import { call, put, take, takeEvery } from 'redux-saga/effects';


function* workerSaga(){
  console.log('worker saga');
  console.log(put({type: 'ACTION_WORKER'}));
  yield put({type: 'ACTION_WORKER'});
}

function* loginSaga(){
  console.log('login saga');
  console.log(put({type: 'ACTION_LOGIN'}));
  yield put({type: 'ACTION_LOGIN'});
}

function* logoutSaga(){
  console.log('logout saga');
  console.log(put({type: 'ACTION_LOGOUT'}));
  yield put({type: 'ACTION_LOGOUT'});
}

function* postLoginSaga(){
  console.log('This is called only after a successful login');
  console.log(put({type: 'ACTION_POST_LOGIN'}));
  yield put({type: 'ACTION_POST_LOGIN'});
}


// watcher saga
function* rootSaga(){
  //takeEvery can be called multiple times, take is called only once, anything between take actions is called only after previous take action
  yield takeEvery('HELLO', workerSaga);
  yield take('LOGIN');
  yield call(loginSaga);
  yield take('POST_LOGIN');
  yield call(postLoginSaga);
  yield take('LOGOUT');
  yield call(logoutSaga);
}
// watcher saga -> actions -> worker saga
export default rootSaga;