import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../../../modules/Login/types';
import loginSaga from '../../../modules/Login/loginSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
}
