import { put, call } from 'redux-saga/effects';
import * as loginActions from './Actions';
import * as errorActions from './../../../global/dataStore/actions/errorActions';
import * as authActions from './../../../global/dataStore/actions/authActions';
import _ from 'lodash';
import { authenticate, logout } from './Repository';
import { loginScreens } from '../../../global/navigation/screens';

export function* loginSaga(action) {
    yield put(loginActions.enableLoader());

    const { email, password } = _.get(action, 'payload');

    console.log('log in ', email);

    try {
        let response = yield call(() => authenticate(email, password));
        if (response.success) {
            yield put(authActions.setSignIn(response));
            yield put(loginActions.disableLoader({}));
        } else {
            yield put(
                errorActions.setError('Username or Password is incorrect'),
            );
            yield put(authActions.setSignOut());
            yield put(loginActions.disableLoader({}));
        }
    } catch (err) {
        yield put(
            errorActions.setError(
                `Oops, Unexpected error has occurred\n${_.get(err, 'message')}`,
            ),
        );
        yield put(authActions.setSignOut());
        yield put(loginActions.disableLoader({}));
    }
}

export function* logoutSaga(action) {
    //todo to logout from all device use this payload
    // const payload = _.get(action, 'payload');
    //
    // yield put(loginActions.enableLoader());
    // try {
    //   let response = yield call(() => logout(payload));
    //   if (response.success) {
    //     yield put(loginActions.disableLoader({}));
    //     //todo put a success snackbar
    //   } else {
    //     yield put(errorActions.setError(_.get(response, 'error', 'error')));
    //     yield put(loginActions.disableLoader({}));
    //   }
    // } catch (err) {
    //   yield put(
    //     errorActions.setError(
    //       `Oops, Unexpected error has occurred\n${_.get(err, 'message')}`,
    //     ),
    //   );
    //   yield put(loginActions.disableLoader({}));
    // }
    yield put(authActions.setSignOut());
}

export function* setEmailSaga(action) {
    console.log(action);
    //todo call backend and validate email, if not show error and re ask for an email,
    // otherwise navigate to the next page
    yield put(loginActions.storeEmail(action.payload.email));
    action.payload.navigation.push(loginScreens.SIGN_UP_SCREEN_PASSWORD);
}
