import { AUTHENTICATE } from './const/url';
import { fetch } from './../../../global/utils/restUtils';
import { methods } from './../../../global/const/RESTConst';
import _ from 'lodash';

export default function authenticate(email, password) {
  return new Promise((resolve, reject) => {
    fetch(AUTHENTICATE, methods.POST, { email, password })
      .then(res => resolve(_.get(res, 'data', {})))
      .catch(err => reject(err));
  });
}
