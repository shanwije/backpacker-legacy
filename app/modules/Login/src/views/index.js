import React from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';

export default function MainView() {
  const id = useSelector(state => state[LOGIN_REDUCER].id);
  const dispatch = useDispatch();
  const onLogin = () => dispatch(loginActions.requestLogin('test', '1234'));

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Login Status : {id}</Text>
      <Button icon="login" mode="outlined" onPress={() => onLogin()}>
        Login
      </Button>
    </View>
  );
}
