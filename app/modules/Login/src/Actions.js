/*
 * Reducer actions related with login
 */
import {
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOGIN_RESPONSE,
    LOG_OUT,
    SET_SIGN_UP,
} from './const/types';
import {
    LOGIN_ENABLE_LOADER,
    LOGIN_DISABLE_LOADER,
} from './../../../global/dataStore/const/commonActionTypes';
import createAction from './../../../global/dataStore/actions/createAction';

export const requestLogin = (email, password) =>
    createAction({
        type: LOGIN_REQUEST,
        payload: { email, password },
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

//---------------

export const setSignUp = isSignUp =>
    createAction({ type: SET_SIGN_UP, payload: isSignUp });
