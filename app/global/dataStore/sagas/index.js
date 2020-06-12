import { takeEvery, all } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    SET_EMAIL,
    SET_EMAIL_AUTH_TOKEN,
    SET_PASSWORD,
} from '../../../modules/Login/src/const/types';
import { LOG_OUT } from '../../../modules/Home/src/types';
import { SET_NOTIFICATION } from '../const/commonActionTypes';
import {
    loginSaga,
    logoutSaga,
    setEmailSaga,
    validateEmailTokenSaga,
    setPasswordSaga,
} from '../../../modules/Login/src/Saga';
import notificationSaga from './notificationSaga.js';

export default function* watch() {
    yield takeEvery('*', action => console.log('SAGA', action));
    yield takeEvery(SET_NOTIFICATION, notificationSaga);
    yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(LOG_OUT, logoutSaga)]);
    yield all([takeEvery(SET_EMAIL, setEmailSaga)]);
    yield all([takeEvery(SET_EMAIL_AUTH_TOKEN, validateEmailTokenSaga)]);
    yield all([takeEvery(SET_PASSWORD, setPasswordSaga)]);
}
