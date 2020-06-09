import React, { useState, useEffect } from 'react';
import {
    View
} from 'react-native';
import { Text, Button, Divider } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';

import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import AppTitle from '../../../../global/components/AppTitle';
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';
import { loginScreens } from '../../../../global/navigation/screens';
import LoginHeaderText from '../../../../global/components/LoginHeaderText';

export default function SignInView({ navigation }) {
    const id = useSelector(state => state[LOGIN_REDUCER].id);
    const dispatch = useDispatch();
    const [email, disableSubmitByEmail, setEmail] = useFormInput(
        inputTypes.EMAIL,
        true,
    );
    const [password, disableSubmitByPassword, setPassword] = useFormInput(
        inputTypes.PASSWORD,
        false,
    );
    const [showPassword, setShowPassword] = useState(false);

    const onLogin = () =>
        dispatch(loginActions.requestLogin(email.value, password.value));

    const onSignUp = () => {
        dispatch(loginActions.setSignUp(true));
    };

    return (
        <View style={styles.container}>
            <LoginHeaderText
                headerText="Sign In"
                subHeaderText="Please enter your email and password"
            />
            <View style={styles.topInnerContainer}>
                <FormWrapper>
                    <TextBox
                        label="Email"
                        autoCompleteType="email"
                        importantForAutofill="auto"
                        keyboardType="email-address"
                        textAlign="center"
                        textContentType="emailAddress"
                        // for smooth navigation through inputs
                        // "done","go","next","search","send","none","previous","default","emergency-call","google","join","route","yahoo"
                        blurOnSubmit={false}
                        autoCorrect={true}
                        autoFocus={true}
                        returnKeyType="next"
                        {...email}
                    />
                    <TextBox
                        label="Password"
                        secureTextEntry={!showPassword}
                        autoCompleteType="password"
                        importantForAutofill="auto"
                        textAlign="center"
                        textContentType="password"
                        // for smooth navigation through inputs
                        // blurOnSubmit={false}
                        returnKeyType={
                            disableSubmitByEmail || disableSubmitByPassword
                                ? 'default'
                                : 'send'
                        }
                        onSubmitEditing={() =>
                            disableSubmitByEmail || disableSubmitByPassword
                                ? ''
                                : onLogin()
                        }
                        {...password}
                        icon={{
                            icon: showPassword ? 'eye' : 'eye-off',
                            disabled: false,
                            animated: true,
                            accessibilityLabel: 'textBox icon',
                            onPress: val => setShowPassword(!showPassword),
                        }}
                    />
                    <Button
                        icon="login"
                        mode="contained"
                        type="submit"
                        value="Submit"
                        disabled={
                            disableSubmitByEmail || disableSubmitByPassword
                        }
                        onPress={() => onLogin()}>
                        Sign In
                    </Button>
                    <Divider inset={true} />
                    <View style={styles.forgotPasswordView}>
                        <Button
                            mode="text"
                            compact={true}
                            onPress={() => console.log('forgot password')}>
                            Forgot your password?
                        </Button>
                    </View>
                    <View style={styles.signUpView}>
                        <Text>Don't have an account? </Text>
                        <Button
                            mode="text"
                            compact={true}
                            onPress={() =>
                                navigation.push(
                                    loginScreens.SIGN_UP_SCREEN_EMAIL,
                                )
                            }>
                            Sign Up
                        </Button>
                    </View>
                </FormWrapper>
            </View>
        </View>
    );
}
