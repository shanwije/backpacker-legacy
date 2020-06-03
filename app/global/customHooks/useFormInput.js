import { useState, useEffect } from 'react';
import validateValue from '../utils/textValidators';
import { COMMON } from '../const/InputTypes';

export default function useFormInput(initialType = COMMON, initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const type = useState(initialType)[0];
  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onChangeText = text => {
    setValue(text);

    if (errorText === '') {
      if (validateValue(value, type)) {
        setDisableSubmit(false);
      } else {
        setDisableSubmit(true);
      }
    } else {
      //already an invalid input
      if (validateValue(value, type)) {
        setDisableSubmit(false);
        setErrorText('');
        setShowError(false);
      } else {
        setDisableSubmit(true);
        setErrorText('invalid ' + type);
        setShowError(true);
      }
    }
  };

  const onBlur = () => {
    if (errorText === '') {
      if (validateValue(value, type)) {
        setDisableSubmit(false);
        setErrorText('');
        setShowError(false);
      } else {
        setDisableSubmit(true);
        setErrorText('invalid ' + type);
        setShowError(true);
      }
    }
  };

  useEffect(() => {}, [value]);

  const bind = {
    value,
    error: showError,
    errorText,
    onChangeText,
    onBlur,
  };

  return [bind, disableSubmit];
}
