import loginReducer from '../../../modules/Login/src/Reducer';
import loadingReducer from './loadingReducer';
import errorReducer from './errorReducer';

import { LOGIN_REDUCER, LOADING_REDUCER, ERROR_REDUCER } from './reducerTypes';

const combinedReducers = {
  [LOGIN_REDUCER]: loginReducer,
  [LOADING_REDUCER]: loadingReducer,
  [ERROR_REDUCER]: errorReducer,
};

export default combinedReducers;
