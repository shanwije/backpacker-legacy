import loginReducer from './../../../modules/Login/Reducer';
import loadingReducer from './loadingReducer';

import { LOADING_REDUCER, LOGIN_REDUCER } from './reducerTypes';

const combinedReducers = {
  [LOGIN_REDUCER]: loginReducer,
  [LOADING_REDUCER]: loadingReducer,
};

export default combinedReducers;
