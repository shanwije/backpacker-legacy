import { put, call, select } from 'redux-saga/effects';
import { delay } from 'redux-saga/effects';

import { Alert } from 'react-native';
import loginUser from './Repository';
import * as loginActions from './Actions';
import _ from 'lodash';

// Our worker Saga that logins the user
export default function* loginAsync(action) {
  yield put(loginActions.enableLoader());

  const { username, password } = _.get(action, 'payload');

  //how to call api
  let response = yield call(loginUser, username, password);
  yield delay(1000);
  //mock response
  response = {
    success: true,
    data: { id: '1233132321' },
    message: 'got fucked up',
  };

  if (response.success) {
    yield put(loginActions.onLoginResponse(response.data));
    yield put(loginActions.disableLoader({}));

    // no need to call navigate as this is handled by redux store with SwitchNavigator
    //yield call(navigationActions.navigateToHome);
  } else {
    yield put(loginActions.loginFailed());
    yield put(loginActions.disableLoader({}));
    setTimeout(() => {
      Alert.alert('BoilerPlate', response.message);
    }, 200);
  }
}
