import { put, takeEvery } from 'redux-saga/effects';


function* workerSaga(){
  console.log('worker saga');
  console.log(put({type: 'ACTION_WORKER'}));
  yield put({type: 'ACTION_WORKER'});
}

// watcher saga
function* rootSaga(){
  yield takeEvery('HELLO', workerSaga)
}
// watcher saga -> actions -> worker saga
export default rootSaga;