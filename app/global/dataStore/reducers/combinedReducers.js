import loginReducer from '../../../modules/Login/src/Reducer';
import loadingReducer from './loadingReducer';
import notificationReducer from './notificationReducer';
import authReducer from './authReducer';

import {
    LOGIN_REDUCER,
    LOADING_REDUCER,
    NOTIFICATION_REDUCER,
    AUTH_REDUCER,
} from './reducerTypes';

const combinedReducers = {
    [AUTH_REDUCER]: authReducer,
    [LOGIN_REDUCER]: loginReducer,
    [LOADING_REDUCER]: loadingReducer,
    [NOTIFICATION_REDUCER]: notificationReducer,
};

export default combinedReducers;
