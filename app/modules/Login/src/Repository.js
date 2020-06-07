import { AUTHENTICATE } from './const/url';
import { fetch } from './../../../global/utils/restUtils';
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
