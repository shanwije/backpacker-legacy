import createAction from './createAction';
import { SET_SIGN_IN, SET_SIGN_OUT } from '../const/commonActionTypes';

export const setSignIn = token =>
    createAction({ type: SET_SIGN_IN, payload: { token } });

export const setSignOut = payload =>
    createAction({ type: SET_SIGN_OUT, payload });
