import { takeEvery, all } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    SET_EMAIL,
} from '../../../modules/Login/src/const/types';
import { LOG_OUT } from '../../../modules/Home/src/types';
import { SET_NOTIFICATION } from '../const/commonActionTypes';
import {
    loginSaga,
    logoutSaga,
    setEmailSaga,
} from '../../../modules/Login/src/Saga';
import notificationSaga from './notificationSaga.js';

export default function* watch() {
    yield takeEvery('*', action => console.log('SAGA', action));
    yield takeEvery(SET_NOTIFICATION, notificationSaga);
    yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(LOG_OUT, logoutSaga)]);
    yield all([takeEvery(SET_EMAIL, setEmailSaga)]);
}
