import { put, call } from 'redux-saga/effects';
import * as loginActions from './Actions';
import * as errorActions from './../../../global/dataStore/actions/errorActions';
import _ from 'lodash';
import authenticate from './Repository';

export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  const { email, password } = _.get(action, 'payload');

  console.log(email);

  try {
    let response = yield call(() => authenticate(email, password));
    if (response.success) {
      yield put(loginActions.onLoginResponse(response.data));
      yield put(loginActions.disableLoader({}));
    } else {
      yield put(errorActions.setError('Username or Password is incorrect'));
      yield put(loginActions.loginFailed());
      yield put(loginActions.disableLoader({}));
    }
  } catch (err) {
    yield put(
      errorActions.setError(
        `Oops, Unexpected error has occurred\n${_.get(err, 'message')}`,
      ),
    );
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
  }
}
