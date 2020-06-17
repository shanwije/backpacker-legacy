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
} from './types';
import _ from 'lodash';

const initialState = {
    isLoggedIn: false,
    id: 0,
    username: '',
    password: '',
};

const loginReducer = createReducer(initialState, {
    [LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: _.get(action, 'payload.username', ''),
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
});

export default loginReducer;
