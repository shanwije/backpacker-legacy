import createReducer from '../../../global/dataStore/reducers/createReducer';
import io from 'socket.io-client';
import config from '../../../config';

const initialState = {
    webSocket: io(config.SOCKET_IO_IP),
};

const webSocketReducer = createReducer(initialState, {});

export default webSocketReducer;
