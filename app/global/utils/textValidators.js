import inputTypes from './../const/InputTypes';

export const validateEmail = email => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = password => {
  return password.length >= 4;
};

const validateValue = (value, type) => {
  const { EMAIL, PASSWORD, COMMON } = inputTypes;
  console.log(value, type);
  switch (type) {
    case EMAIL:
      return validateEmail(value);
    case PASSWORD:
      return validatePassword(value);
    case COMMON:
    default:
      return true;
  }
};

export default validateValue;
