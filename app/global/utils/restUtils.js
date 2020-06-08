import _ from 'lodash';
import {
    statusCodes,
    commonHeaders,
    default_timeout_duration,
} from './../const/RESTConst';
import axios from 'axios';

export const fetch = (
    url,
    method,
    data = {},
    headers = {},
    timeout = default_timeout_duration,
) => {
    if (__DEV__) {
        console.log(
            `REST CALL : \nurl : ${url}, \nmethod : ${method}, \ndata : ${JSON.stringify(
                data,
                null,
                '\t',
            )}, \nheaders: ${JSON.stringify(
                headers,
                null,
                '\t',
            )}, \ntimeout: ${timeout}}`,
        );
    }

    return new Promise((resolve, reject) => {
        axios({
            url,
            method,
            data,
            headers: _.isEmpty(headers)
                ? _.assign({}, headers, getHeaders())
                : getHeaders(),
            timeout: timeout,
        })
            .then(res => {
                if (__DEV__) {
                    console.log(
                        `Response success : ${JSON.stringify(res, null, '\t')}`,
                    );
                }
                if (
                    res.status === statusCodes.CREATED ||
                    res.status === statusCodes.OK ||
                    res.status === statusCodes.NO_CONTENT
                ) {
                    resolve(res);
                } else {
                    reject(res);
                }
            })
            .catch(err => {
                if (__DEV__) {
                    console.log(
                        `Response error : ${JSON.stringify(err, null, '\t')}`,
                    );
                }
                reject(err);
            });
    });
};

export const fillUri = (uriPattern, pathParams, queryParams = {}) => {
    let uri = uriPattern;
    if (pathParams && !_.isEmpty(pathParams)) {
        _.forEach(pathParams, (value, key) => {
            uri = _.replace(uri, `{${key}}`, encodeURI(_.trim(`${value}`)));
        });
    }
    if (queryParams && !_.isEmpty(queryParams)) {
        uri += '?';
        _.forEach(queryParams, (value, key) => {
            uri += `${encodeURI(_.trim(`${key}`))}=${encodeURI(
                _.trim(`${value}`),
            )}&`;
        });
        uri = _.trimEnd(uri, '&');
    }

    return uri;
};

const getHeaders = () => commonHeaders;
