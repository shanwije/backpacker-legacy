import { put, select } from 'redux-saga/effects';
import _ from 'lodash';
import { setWebSocket, clearWebSocket } from './webSocketActions';
import * as reducerTypes from '../dataStore/reducers/reducerTypes';
import * as notificationActions from '../dataStore/actions/notificationActions';

export default function* webSocketInitiateSaga(action) {
    try {
        const authToken = yield select(
            state => state[reducerTypes.AUTH_REDUCER].authToken,
        );
        const currentSocket = yield select(
            state => state[reducerTypes.WEB_SOCKET_REDUCER].webSocket,
        );
        if (!currentSocket.connected && _.size(authToken) > 0) {
            yield put(setWebSocket(authToken));
        }
    } catch (err) {
        yield put(notificationActions.setNotification(err));
    }
}

export function* forceDisconnectWebSocketSaga(action) {
    try {
        const currentSocket = yield select(
            state => state[reducerTypes.WEB_SOCKET_REDUCER].webSocket,
        );
        yield currentSocket.disconnect();
        yield put(clearWebSocket());
    } catch (err) {
        yield put(notificationActions.setNotification(err));
    }
}
