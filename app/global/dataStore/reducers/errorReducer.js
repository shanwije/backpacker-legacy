import createReducer from './createReducer';
import { SET_ERROR, CLEAR_ERROR } from './../const/commonActionTypes';

const initialState = {
    error: '',
};

const errorReducer = createReducer(initialState, {
    [SET_ERROR](state, action) {
        return { ...state, error: action.payload.error };
    },
    [CLEAR_ERROR](state) {
        return { ...state, error: '' };
    },
});

export default errorReducer;
