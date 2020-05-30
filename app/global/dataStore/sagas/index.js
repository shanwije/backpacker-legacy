import { takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../../../modules/Login/types';
import loginSaga from '../../../modules/Login/Saga';

export default function* watch() {
  yield takeEvery('*', action => console.log('SAGA', action));
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}
