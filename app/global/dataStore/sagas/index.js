import { takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../../../modules/Login/src/types';
import loginSaga from '../../../modules/Login/src/Saga';

export default function* watch() {
  yield takeEvery('*', action => console.log('SAGA', action));
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}
