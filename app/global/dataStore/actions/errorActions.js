import createAction from './createAction';
import { CLEAR_ERROR, SET_ERROR } from './../const/commonActionTypes';

export const clearError = () => createAction({ type: CLEAR_ERROR });
export const setError = errorMsg =>
    createAction({ type: SET_ERROR, payload: { error: errorMsg } });
