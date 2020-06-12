import { useState, useEffect } from 'react';
import validateValue from '../utils/textValidators';
import { COMMON } from '../const/InputTypes';
import _ from 'lodash';

export default function useFormInput(
    initialType = COMMON,
    trim = false,
    initialValue = '',
) {
    const [value, setValue] = useState(initialValue);
    const type = useState(initialType)[0];
    const [errorText, setErrorText] = useState('');
    const [showError, setShowError] = useState(false);
    const [disableSubmit, setDisableSubmit] = useState(true);

    const setErrorStatus = (isDisableSubmit, isShowError, errorTextValue) => {
        setDisableSubmit(isDisableSubmit);
        setErrorText(errorTextValue);
        setShowError(isShowError);
    };

    const onModifyValue = (newValue, reset = false) => {
        console.log(newValue);
        newValue = trim ? _.trim(newValue) : newValue;
        if (!_.isString(newValue)) {
            setErrorStatus(true, true, `Invalid input ${typeof newValue}`);
            setDisableSubmit(true);
        } else if (newValue.length === 0) {
            setErrorStatus(true, false, '');
        } else if (!validateValue(newValue, type)) {
            setErrorStatus(true, true, `Please enter a valid ${type}.`);
        } else {
            setErrorStatus(false, false, '');
        }
        if (reset) setValue(newValue);
    };

    const onChangeText = text => {
        onModifyValue(text, true);
    };

    const onFocus = () => {
        onModifyValue(value, false);
    };

    useEffect(() => {}, [value]);

    const bind = {
        value,
        error: showError,
        errorText,
        onChangeText,
        onFocus,
    };

    return [bind, disableSubmit, setValue];
}
