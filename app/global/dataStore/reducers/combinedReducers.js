import loginReducer from '../../../modules/Login/src/Reducer';
import loadingReducer from './loadingReducer';
import notificationReducer from './notificationReducer';
import authReducer from './authReducer';
import webSocketReducer from '../../webSocket/webSocketReducer';

import {
    LOGIN_REDUCER,
    LOADING_REDUCER,
    NOTIFICATION_REDUCER,
    AUTH_REDUCER,
    WEB_SOCKET_REDUCER,
} from './reducerTypes';

const combinedReducers = {
    [AUTH_REDUCER]: authReducer,
    [LOGIN_REDUCER]: loginReducer,
    [LOADING_REDUCER]: loadingReducer,
    [NOTIFICATION_REDUCER]: notificationReducer,
    [WEB_SOCKET_REDUCER]: webSocketReducer,
};

export default combinedReducers;
