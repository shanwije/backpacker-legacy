import { takeEvery, all, put, fork, take } from 'redux-saga/effects';
import {
    LOGIN_REQUEST,
    SET_EMAIL,
    SET_EMAIL_AUTH_TOKEN,
    SET_PASSWORD,
    PERSIST_REHYDRATE,
} from '../../../modules/Login/src/const/types';
import { LOG_OUT } from '../../../modules/Chat/src/types';
import {
    FORCE_DISCONNECT_WEB_SOCKET,
    SET_NOTIFICATION,
} from '../const/commonActionTypes';
import {
    loginSaga,
    logoutSaga,
    setEmailSaga,
    validateEmailTokenSaga,
    setPasswordSaga,
} from '../../../modules/Login/src/Saga';
import notificationSaga from './notificationSaga.js';
import webSocketInitiateSaga, {
    forceDisconnectWebSocketSaga,
} from '../../webSocket/webSocketSaga';

export default function* watch() {
    yield takeEvery(PERSIST_REHYDRATE, webSocketInitiateSaga);
    yield takeEvery('*', action => console.log('SAGA', action));
    yield takeEvery(SET_NOTIFICATION, notificationSaga);
    yield all([takeEvery(LOGIN_REQUEST, loginSaga)]);
    yield all([takeEvery(LOG_OUT, logoutSaga)]);
    yield all([takeEvery(SET_EMAIL, setEmailSaga)]);
    yield all([takeEvery(SET_EMAIL_AUTH_TOKEN, validateEmailTokenSaga)]);
    yield all([takeEvery(SET_PASSWORD, setPasswordSaga)]);

    yield all([
        takeEvery(FORCE_DISCONNECT_WEB_SOCKET, forceDisconnectWebSocketSaga), // clear websocket in logout
    ]);
}
