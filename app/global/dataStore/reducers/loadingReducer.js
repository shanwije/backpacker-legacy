import createReducer from './createReducer';
import {
  LOGIN_ENABLE_LOADER,
  LOGIN_DISABLE_LOADER,
} from './../const/commonActionTypes';

const initialState = {
  isLoginLoading: false,
};

const loadingReducer = createReducer(initialState, {
  [LOGIN_ENABLE_LOADER](state) {
    return { ...state, isLoginLoading: true };
  },
  [LOGIN_DISABLE_LOADER](state) {
    return { ...state, isLoginLoading: false };
  },
});

export default loadingReducer;
