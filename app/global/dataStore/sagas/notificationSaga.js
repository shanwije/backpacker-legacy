import { put, delay } from 'redux-saga/effects';
import * as notificationActions from '../actions/notificationActions';

export default function* errorAsync() {
    yield delay(3000);
    yield put(notificationActions.clearNotification());
}
