/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../../global/dataStore/reducers/createReducer';
import { LOGIN_REQUEST, STORE_EMAIL } from './const/types';
import _ from 'lodash';

const initialState = {
    email: '',
    password: '',
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
        console.log('XXXXXXXXXXXXXXXXXX', action);
        return {
            ...state,
            email: action.payload.email,
        };
    },
});

export default loginReducer;
