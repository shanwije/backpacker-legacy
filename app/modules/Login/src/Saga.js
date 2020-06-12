import { put, call } from 'redux-saga/effects';
import * as loginActions from './Actions';
import * as notificationActions from '../../../global/dataStore/actions/notificationActions';
import * as authActions from './../../../global/dataStore/actions/authActions';
import _ from 'lodash';
import {
    authenticate,
    setAuthEmail,
    setAuthEmailToken,
    setPasswordWithBearer,
} from './Repository';
import { loginScreens } from '../../../global/navigation/screens';
import { getHttpErrorMsg } from '../../../global/utils/utils';
import { select } from 'redux-saga/effects';
import * as reducerTypes from '../../../global/dataStore/reducers/reducerTypes';

export function* loginSaga(action) {
    yield put(loginActions.enableLoader());
    const { email, password } = _.get(action, 'payload');
    console.log('log in ', email);

    try {
        const response = yield call(() => authenticate(email, password));
        if (response.success) {
            yield put(authActions.setSignIn(response.token));
            yield put(loginActions.disableLoader({}));
        } else {
            console.log('Res', response);
            yield put(
                notificationActions.setNotification({
                    message: 'Error',
                    code: '500',
                }),
            );
            yield put(authActions.setSignOut());
            yield put(loginActions.disableLoader({}));
        }
    } catch (err) {
        yield put(notificationActions.setNotification(err));
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
    //     yield put(notificationActions.setNotification(_.get(response, 'error', 'error')));
    //     yield put(loginActions.disableLoader({}));
    //   }
    // } catch (err) {
    //   yield put(
    //     notificationActions.setNotification(
    //       `Oops, Unexpected error has occurred\n${_.get(err, 'message')}`,
    //     ),
    //   );
    //   yield put(loginActions.disableLoader({}));
    // }
    yield put(authActions.setSignOut());
}

export function* setEmailSaga(action) {
    try {
        const { email } = _.get(action, 'payload');
        yield put(loginActions.enableLoader());
        const response = yield call(() => setAuthEmail(email));
        if (response.success) {
            yield put(loginActions.storeEmail(action.payload.email));
            yield put(loginActions.disableLoader({}));
            action.payload.navigation.navigate(
                loginScreens.SIGN_UP_SCREEN_EMAIL_TOKEN,
            );
            yield put(
                notificationActions.setNotification({
                    message:
                        'We have sent you a code with 5 numbers, please check your email',
                    code: '200',
                }),
            );
        } else {
            console.log('Res', response);
            yield put(
                notificationActions.setNotification({
                    message: 'Error',
                    code: '500',
                }),
            );
            yield put(authActions.setSignOut());
            yield put(loginActions.disableLoader({}));
        }
    } catch (err) {
        yield put(notificationActions.setNotification(err));
        yield put(loginActions.disableLoader({}));
    }
}

export function* validateEmailTokenSaga(action) {
    console.log(action);
    try {
        const { token, navigation } = _.get(action, 'payload');
        const email = yield select(
            state => state[reducerTypes.LOGIN_REDUCER].email,
        );

        yield put(loginActions.enableLoader());

        //TODO include device id and ip address in the future, so the bearer would be more secure
        const response = yield call(() => setAuthEmailToken(token, email));
        if (response.success) {
            yield put(loginActions.setPasswordBearer(response.token));
            yield put(loginActions.disableLoader({}));
            action.payload.navigation.navigate(
                loginScreens.SIGN_UP_SCREEN_PASSWORD,
            );

            yield put(
                notificationActions.setNotification({
                    message:
                        "Email verification successful, Let's setup a password for you,",
                    code: '200',
                }),
            );
        } else {
            console.log('Res', response);
            yield put(
                notificationActions.setNotification({
                    message: 'Error',
                    code: '500',
                }),
            );
            yield put(authActions.setSignOut());
            yield put(loginActions.disableLoader({}));
        }
    } catch (err) {
        yield put(notificationActions.setNotification(err));
        yield put(loginActions.disableLoader({}));
    }
}

export function* setPasswordSaga(action) {
    console.log(action);
    try {
        const { password } = _.get(action, 'payload');
        const bearer = yield select(
            state => state[reducerTypes.LOGIN_REDUCER].bearer,
        );

        yield put(loginActions.enableLoader());
        const response = yield call(() =>
            setPasswordWithBearer(password, bearer),
        );
        if (response.success) {
            // login successful and jwt received
            yield put(loginActions.disableLoader({}));
            yield put(loginActions.clearSignupData());
            yield put(authActions.setSignIn(response.token));
            yield put(loginActions.disableLoader({}));

            yield put(
                notificationActions.setNotification({
                    message: 'Your backpacker account is successfully created.',
                    code: '200',
                }),
            );
        } else {
            yield put(
                notificationActions.setNotification({
                    message: 'Error',
                    code: '500',
                }),
            );
            yield put(authActions.setSignOut());
            yield put(loginActions.disableLoader({}));
        }
    } catch (err) {
        yield put(notificationActions.setNotification(err));
        yield put(loginActions.disableLoader({}));
    }
}
