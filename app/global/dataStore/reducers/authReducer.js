import createReducer from './createReducer';
import _ from 'lodash';
import { SET_SIGN_IN, SET_SIGN_OUT } from './../const/commonActionTypes';

const initialState = {
    isLoggedIn: false,
    authToken: '',
};

const authReducer = createReducer(initialState, {
    [SET_SIGN_IN](state, action) {
        console.log('auth payload', action);
        return {
            ...state,
            isLoggedIn: _.get(action, 'payload.success', false),
            authToken: _.get(action, 'payload.token', ''),
        };
    },
    [SET_SIGN_OUT](state, action) {
        console.log('auth payload', action);
        return {
            ...state,
            isLoggedIn: false,
            authToken: '',
        };
    },
});

export default authReducer;
