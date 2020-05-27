/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from '../../../modules/Login/Reducer';
export default Object.assign(loginReducer, loadingReducer);
