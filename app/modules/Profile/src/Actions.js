/*
 * Reducer actions related with login
 */
import {
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOGIN_RESPONSE,
    LOGIN_ENABLE_LOADER,
    LOGIN_DISABLE_LOADER,
    LOG_OUT,
} from './types';
import createAction from '../../../../global/dataStore/actions/createAction';

export const requestLogin = (username, password) =>
    createAction({
        type: LOGIN_REQUEST,
        payload: { username, password },
    });

export const loginFailed = () =>
    createAction({
        type: LOGIN_FAILED,
    });

export const onLoginResponse = response =>
    createAction({
        type: LOGIN_RESPONSE,
        payload: response,
    });
export const enableLoader = () => createAction({ type: LOGIN_ENABLE_LOADER });

export const disableLoader = () => createAction({ type: LOGIN_DISABLE_LOADER });

export const logOut = () => createAction({ type: LOG_OUT });
