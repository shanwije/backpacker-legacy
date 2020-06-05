import React, { useState, useEffect } from 'react';
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
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';

export default function MainView() {
  const id = useSelector(state => state[LOGIN_REDUCER].id);
  const dispatch = useDispatch();
  const [email, disableSubmitByEmail, setEmail] = useFormInput(
    inputTypes.EMAIL,
  );
  const [password, disableSubmitByPassword, setPassword] = useFormInput(
    inputTypes.PASSWORD,
  );
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = () =>
    dispatch(loginActions.requestLogin(email.value, password.value));

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
              autoCompleteType="email"
              importantForAutofill="auto"
              keyboardType="email-address"
              textAlign="center"
              textContentType="emailAddress"
              {...email}
            />
            <TextBox
              label="Password"
              secureTextEntry={!showPassword}
              autoCompleteType="password"
              importantForAutofill="auto"
              keyboardType="visible-password"
              textAlign="center"
              textContentType="password"
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
              disabled={disableSubmitByEmail || disableSubmitByPassword}
              onPress={() => onLogin()}>
              Sign In
            </Button>
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
                onPress={() => console.log('signup')}>
                Sign Up
              </Button>
            </View>
          </FormWrapper>
        </View>
      </View>
    </ImageBackground>
  );
}
