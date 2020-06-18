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
});

export default loginReducer;
