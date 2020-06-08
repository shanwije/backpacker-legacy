import { put, delay } from 'redux-saga/effects';
import * as errorActions from './../actions/errorActions';

export default function* errorAsync() {
    yield delay(3000);
    yield put(errorActions.clearError());
}
