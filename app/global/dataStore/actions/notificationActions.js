import createAction from './createAction';
import {
    CLEAR_NOTIFICATION,
    SET_NOTIFICATION,
} from '../const/commonActionTypes';

export const clearNotification = () =>
    createAction({ type: CLEAR_NOTIFICATION });
export const setNotification = notification =>
    createAction({ type: SET_NOTIFICATION, payload: notification });
