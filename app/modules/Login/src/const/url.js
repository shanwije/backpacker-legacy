import config from './../../../../config';

export const AUTHENTICATE = `${config.BASE_URL}auth/sign-in`;
export const SET_AUTH_EMAIL = `${
    config.BASE_URL
}/auth/sign-up/email?forgotPassword=false`;
