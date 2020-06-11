import config from './../../../../config';

export const AUTHENTICATE = `${config.BASE_URL}auth/sign-in`;
export const SET_AUTH_EMAIL = `${
    config.BASE_URL
}/auth/sign-up/email?forgotPassword=false`;
export const SET_AUTH_EMAIL_TOKEN = `${
    config.BASE_URL
}/auth/sign-up/email-auth-token?forgotPassword=false`;
export const SET_PASSWORD = `${
    config.BASE_URL
}/auth/sign-up/password?forgotPassword=false`;
