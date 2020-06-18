import createReducer from '../dataStore/reducers/createReducer';
import io from 'socket.io-client';
import config from '../../config';
import {
    SET_WEB_SOCKET,
    CLEAR_WEB_SOCKET,
} from '../dataStore/const/commonActionTypes';

const initialState = {
    webSocket: {},
};

const webSocketReducer = createReducer(initialState, {
    [SET_WEB_SOCKET](state, action) {
        return {
            ...state,
            webSocket: io(config.SOCKET_IO_IP, {
                extraHeaders: {
                    Authorization: `bearer ${action.payload.authToken}`,
                },
            }),
        };
    },
    [CLEAR_WEB_SOCKET](state) {
        return {
            ...state,
            webSocket: {},
        };
    },
});

export default webSocketReducer;
