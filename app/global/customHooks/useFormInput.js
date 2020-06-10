import { useState, useEffect } from 'react';
import validateValue from '../utils/textValidators';
import { COMMON } from '../const/InputTypes';

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

    const onChangeText = text => {
        console.log(text);
        text = trim && text ? text.trim() : text;
        if (!validateValue(text, type)) {
            setDisableSubmit(true);
            setErrorText('invalid ' + type);
            setShowError(true);
        } else {
            setDisableSubmit(false);
            setErrorText('');
            setShowError(false);
        }
        setValue(text);
    };

    const onFocus = () => {
        if (!validateValue(value, type)) {
            setDisableSubmit(true);
            setErrorText('invalid ' + type);
            setShowError(true);
        } else {
            setDisableSubmit(false);
            setErrorText('');
            setShowError(false);
        }
    };

    // useEffect(() => {}, [value]);

    const bind = {
        value,
        error: showError,
        errorText,
        onChangeText,
        onFocus,
    };

    return [bind, disableSubmit, setValue];
}
