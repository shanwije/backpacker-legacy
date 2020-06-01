import { takeEvery, all } from 'redux-saga/effects';
import { LOGIN_REQUEST } from '../../../modules/Login/src/const/types';
import { SET_ERROR } from './../const/commonActionTypes';
import loginSaga from '../../../modules/Login/src/Saga';
import errorSaga from './errorSaga.js';

export default function* watch() {
  yield takeEvery('*', action => console.log('SAGA', action));
  yield takeEvery(SET_ERROR, errorSaga);
  yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
}
