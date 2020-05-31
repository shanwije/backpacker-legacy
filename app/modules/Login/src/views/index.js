/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';

import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import backgroundImage from './../../../../assets/images/login_background.png';
import AppTitle from '../../../../global/components/AppTitle';

export default function MainView() {
  const id = useSelector(state => state[LOGIN_REDUCER].id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

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
              focus={true}
              label="Email"
              error={true}
              errorText={'invalid email'}
              secureTextEntry={false}
            />
            <TextBox
              focus={true}
              label="Password"
              error={false}
              errorText={'hello world'}
              icon={{
                icon: 'eye',
                disabled: false,
                animated: true,
                accessibilityLabel: 'textBox icon',
                onPress: val => console.log('pressed', val),
              }}
              secureTextEntry={true}
            />

            <Button icon="login" mode="contained" onPress={() => onLogin()}>
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
