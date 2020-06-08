import { useState, useEffect } from 'react';
import validateValue from '../utils/textValidators';
import { COMMON } from '../const/InputTypes';

export default function useFormInput(initialType = COMMON, trim = false, initialValue = '') {
  const [value, setValue] = useState(initialValue);
  const type = useState(initialType)[0];
  const [errorText, setErrorText] = useState('');
  const [showError, setShowError] = useState(false);
  const [disableSubmit, setDisableSubmit] = useState(true);

  const onChangeText = text => {
    setValue(trim ? text.trim() : text);

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
  const updateInputOnOutOfFocus = () => {
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

  const onEndEditing = () => {
    updateInputOnOutOfFocus();
  };
  const onBlur = () => {
    updateInputOnOutOfFocus();
  };

  useEffect(() => {}, [value]);

  const bind = {
    value,
    error: showError,
    errorText,
    onChangeText,
    onEndEditing,
  };

  return [bind, disableSubmit, setValue];
}
