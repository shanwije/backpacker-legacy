export const getHttpErrorMsg = err => {
    const { msg, code } = err;
    return msg;
};
