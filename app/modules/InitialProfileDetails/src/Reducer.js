/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../global/dataStore/reducers/createReducer';
import {
    LOGIN_REQUEST,
    STORE_EMAIL,
    SET_PASSWORD_BEARER,
    CLEAR_SIGN_UP_DATA,
} from './const/types';
import _ from 'lodash';

const initialState = {
    email: '',
    password: '',
    bearer: '',
};

const loginReducer = createReducer(initialState, {
    [LOGIN_REQUEST](state, action) {
        return {
            ...state,
            email: _.get(action, 'payload.email', ''),
            password: _.get(action, 'payload.password', ''),
        };
    },
    [STORE_EMAIL](state, action) {
        return {
            ...state,
            email: action.payload.email,
        };
    },
    [SET_PASSWORD_BEARER](state, action) {
        console.log('XXXXXXXXXXXXXXXXXX', action);
        return {
            ...state,
            bearer: action.payload.token,
        };
    },
    [CLEAR_SIGN_UP_DATA]() {
        return {
            ...initialState,
        };
    },
});

export default loginReducer;
