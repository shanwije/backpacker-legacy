export const methods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

export const statusCodes = {
    OK: 200,
    CREATED: 201,
    NO_CONTENT: 204,
    CONFLICT: 409,
    EXPECTATION_FAILED: 417,
    PRECONDITION_FAILED: 412,
};

export const commonHeaders = {
    Accept: 'application/json',
    'content-type': 'application/json',
};

export const default_timeout_duration = 5000; //ms
