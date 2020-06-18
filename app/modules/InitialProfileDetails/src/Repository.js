import {
    AUTHENTICATE,
    SET_AUTH_EMAIL,
    SET_AUTH_EMAIL_TOKEN,
    SET_PASSWORD,
} from './const/url';
import { fetch } from '../../../global/apiConfig/restUtils';
import { methods } from './../../../global/const/RESTConst';
import _ from 'lodash';

export function authenticate(email, password) {
    return new Promise((resolve, reject) => {
        fetch(AUTHENTICATE, methods.POST, { email, password })
            .then(res => resolve(_.get(res, 'data', {})))
            .catch(err => reject(err));
    });
}
//todo to clear login logged in device from user device array, use below
// export function logout(email, password) {
//   return new Promise((resolve, reject) => {
//     fetch(, methods.POST, { email, password })
//         .then(res => resolve(_.get(res, 'data', {})))
//         .catch(err => reject(err));
//   });
// }
export function setAuthEmail(email) {
    return new Promise((resolve, reject) => {
        fetch(SET_AUTH_EMAIL, methods.POST, { email })
            .then(res => resolve(_.get(res, 'data', {})))
            .catch(err => reject(err));
    });
}

export function setAuthEmailToken(token, email) {
    return new Promise((resolve, reject) => {
        fetch(SET_AUTH_EMAIL_TOKEN, methods.POST, { token, email })
            .then(res => resolve(_.get(res, 'data', {})))
            .catch(err => reject(err));
    });
}

export function setPasswordWithBearer(password, bearer) {
    return new Promise((resolve, reject) => {
        fetch(
            SET_PASSWORD,
            methods.POST,
            { password },
            {
                Authorization: `bearer ${bearer}`,
            },
        )
            .then(res => resolve(_.get(res, 'data', {})))
            .catch(err => reject(err));
    });
}
