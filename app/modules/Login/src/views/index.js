/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';

import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import backgroundImage from './../../../../assets/images/login_background.jpg';
import AppTitle from '../../../../global/components/AppTitle';
import {
  validateEmail,
  validatePassword,
} from './../../../../global/utils/textValidators';

export default function MainView() {
  const id = useSelector(state => state[LOGIN_REDUCER].id);
  const dispatch = useDispatch();

  const [email, setEmail] = useState({
    value: '',
    error: false,
  });
  const [password, setPassword] = useState({
    value: '',
    error: true,
  });

  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () =>
    dispatch(loginActions.requestLogin(email.value, password.value));

  const validateInput = (type, input) => {
    if (type === 'EMAIL') {
      const error = !validateEmail(input);
      setEmail({ value: input, error: error });
    } else {
      const error = !validatePassword(input);
      setPassword({ value: input, error: error });
    }
  };

  return (
    <ImageBackground
      source={backgroundImage}
      width={null}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <AppTitle />
        <View style={styles.topInnerContainer}>
          <FormWrapper formHeader="Welcome Back!">
            <TextBox
              label="Email"
              error={email.error}
              errorText={'invalid email'}
              value={email.value}
              onBlur={() => {
                // validateInput('EMAIL');
              }}
              onChangeText={text => {
                validateInput('EMAIL', text);
              }}
            />
            <TextBox
              focus={true}
              label="Password"
              error={false}
              errorText={'hello world'}
              icon={{
                icon: showPassword ? 'eye' : 'eye-off',
                disabled: false,
                animated: true,
                accessibilityLabel: 'textBox icon',
                onPress: val => setShowPassword(!showPassword),
              }}
              secureTextEntry={!showPassword}
              value={password.value}
              onBlur={() => {
                // validateInput('PASSWORD');
              }}
              onChangeText={text => {
                validateInput('PASSWORD', text);
              }}
            />
            <Button
              icon="login"
              mode="contained"
              disabled={
                password.error || (email.error || email.value.length === 0)
              }
              onPress={() => onLogin()}>
              Sign In
            </Button>
            <View style={styles.forgotPasswordView}>
              <Button mode="text" compact={true} onPress={() => onLogin()}>
                Forgot your password?
              </Button>
            </View>
            <View style={styles.signUpView}>
              <Text>Don't have an account? </Text>
              <Button mode="text" compact={true} onPress={() => onLogin()}>
                Sign Up
              </Button>
            </View>
          </FormWrapper>
        </View>
        <Text style={styles.login}>Login Status : {id}</Text>
      </View>
    </ImageBackground>
  );
}
