import {
    SET_WEB_SOCKET,
    FORCE_DISCONNECT_WEB_SOCKET,
    CLEAR_WEB_SOCKET,
} from '../dataStore/const/commonActionTypes';
import createAction from '../dataStore/actions/createAction';

export const clearWebSocket = () =>
    createAction({
        type: CLEAR_WEB_SOCKET,
        payload: {},
    });

export const forceDisconnectWebSocket = () =>
    createAction({
        type: FORCE_DISCONNECT_WEB_SOCKET,
        payload: {},
    });

export const setWebSocket = authToken =>
    createAction({
        type: SET_WEB_SOCKET,
        payload: { authToken },
    });
