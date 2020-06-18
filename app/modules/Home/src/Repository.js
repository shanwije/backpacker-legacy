import Api from '../../../global/apiConfig/index';
import ApiConstants from '../../../global/apiConfig/ApiConstants';

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
