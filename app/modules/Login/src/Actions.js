/*
 * Reducer actions related with login
 */
import {
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOGIN_RESPONSE,
    LOG_OUT,
    SET_SIGN_UP,
    SET_EMAIL,
    STORE_EMAIL,
    SET_PASSWORD,
    SET_EMAIL_AUTH_TOKEN,
    SET_PASSWORD_BEARER,
    CLEAR_SIGN_UP_DATA,
} from './const/types';
import {
    LOGIN_ENABLE_LOADER,
    LOGIN_DISABLE_LOADER,
} from '../../../global/dataStore/const/commonActionTypes';
import createAction from './../../../global/dataStore/actions/createAction';

export const clearSignupData = () =>
    createAction({
        type: CLEAR_SIGN_UP_DATA,
        payload: {},
    });

export const setPasswordBearer = token =>
    createAction({
        type: SET_PASSWORD_BEARER,
        payload: { token },
    });

export const setEmailAuthToken = (token, navigation) =>
    createAction({
        type: SET_EMAIL_AUTH_TOKEN,
        payload: { token, navigation },
    });

export const setPassword = (password, navigation) =>
    createAction({
        type: SET_PASSWORD,
        payload: { password, navigation },
    });

export const setEmail = (email, navigation) =>
    createAction({
        type: SET_EMAIL,
        payload: { email, navigation },
    });

export const storeEmail = email =>
    createAction({
        type: STORE_EMAIL,
        payload: { email },
    });

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
