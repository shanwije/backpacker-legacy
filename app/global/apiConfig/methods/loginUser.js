import Api from '../index';
import ApiConstants from './../ApiConstants';

export default function loginUser(username, password) {
  setTimeout(() => {
    // return Api(
    //   ApiConstants.LOGIN + '?username=' + username + '&password=' + password,
    //   null,
    //   'post',
    //   null,
    // );
    const dummyResponse = Promise.resolve({
      success: true,
      data: { id: 1 },
      message: 'got fucked up',
    });
    return dummyResponse;

  }, 3000);
}
