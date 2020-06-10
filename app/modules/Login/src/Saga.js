import { put, call } from 'redux-saga/effects';
import * as loginActions from './Actions';
import * as notificationActions from '../../../global/dataStore/actions/notificationActions';
import * as authActions from './../../../global/dataStore/actions/authActions';
import _ from 'lodash';
import { authenticate, setAuthEmail } from './Repository';
import { loginScreens } from '../../../global/navigation/screens';
import { getHttpErrorMsg } from '../../../global/utils/utils';

export function* loginSaga(action) {
    yield put(loginActions.enableLoader());
    const { email, password } = _.get(action, 'payload');
    console.log('log in ', email);

    try {
        const response = yield call(() => authenticate(email, password));
        if (response.success) {
            yield put(authActions.setSignIn(response));
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
            action.payload.navigation.push(
                loginScreens.SIGN_UP_SCREEN_EMAIL_TOKEN,
            );
            yield put(
                notificationActions.setNotification({
                    message:
                        'We have sent you a 6 number token, please check your email',
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
