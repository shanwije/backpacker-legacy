import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../actions/types';
import loginSaga from '../../auth/loginSaga';

export default function* watch() {
  yield all([takeEvery(types.LOGIN_REQUEST, loginSaga)]);
}
