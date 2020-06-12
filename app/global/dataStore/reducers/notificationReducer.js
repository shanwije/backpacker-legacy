import createReducer from './createReducer';
import {
    SET_NOTIFICATION,
    CLEAR_NOTIFICATION,
} from '../const/commonActionTypes';
import _ from 'lodash';

const initialState = {
    message: '',
    errorCode: '',
};

const notificationReducer = createReducer(initialState, {
    [SET_NOTIFICATION](state, action) {
        console.log('not reducer', action);
        return {
            ...state,
            message: _.get(action, 'payload.message', ''),
            code: _.get(action, 'payload.code', ''),
        };
    },
    [CLEAR_NOTIFICATION](state) {
        return { ...state, message: '', errorCode: '' };
    },
});

export default notificationReducer;
