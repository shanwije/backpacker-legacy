/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../global/dataStore/reducers/createReducer';
import {
    LOGIN_REQUEST,
    LOGIN_FAILED,
    LOGIN_RESPONSE,
    LOGIN_LOADING_ENDED,
    LOG_OUT,
    SET_SIGN_UP,
} from './const/types';
import _ from 'lodash';

const initialState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
    isSignUp: false,
};

const loginReducer = createReducer(initialState, {
    [LOGIN_REQUEST](state, action) {
        return {
            ...state,
            email: _.get(action, 'payload.email', ''),
            password: _.get(action, 'payload.password', ''),
        };
    },
    [LOGIN_LOADING_ENDED](state) {
        return { ...state };
    },
    [LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            id: _.get(action, 'payload.id', ''),
            isLoggedIn: true,
        };
    },
    [LOGIN_FAILED](state) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
    [LOG_OUT](state) {
        return {
            ...state,
            isLoggedIn: false,
        };
    },
    [SET_SIGN_UP](state, action) {
        console.log('XXXXXXXXXXXXXXXXXX', action);
        return {
            ...state,
            isSignUp: action.payload,
        };
    },
});

export default loginReducer;
