/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, ImageBackground, Icon } from 'react-native';
import { Text, Button, TextInput, IconButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import backgroundImage from './../../../../assets/images/login_background.jpeg';
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
        <View style={styles.topInnerContainer}>
          <View style={styles.wrapper}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                focus={true}
                label="Email"
                error={false}
                mode="flat"
                // secureTextEntry={true}
                style={styles.formElement}
                // caretHidden={true}
              />
              <IconButton style={{ right: 30 }} icon="email" size={20} />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextInput
                focus={true}
                label="password"
                error={false}
                mode="flat"
                secureTextEntry={true}
                style={styles.formElement}
                // caretHidden={true}
              />
              <IconButton style={{ right: 30 }} icon="eye" size={20} />
            </View>

            <Button
              style={styles.formButton}
              icon="login"
              mode="contained"
              onPress={() => onLogin()}>
              Sign In
            </Button>
            <Text style={styles.login}>Login Status : {id}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
