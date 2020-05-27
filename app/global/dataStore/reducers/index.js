/*
 * combines all th existing reducers
 */
import * as loadingReducer from './loadingReducer';
import * as loginReducer from '../../../modules/Login/loginReducer';
export default Object.assign(loginReducer, loadingReducer);
