import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import { navigationRef } from './NavigationService';

import HomeMainBottomTabNavigator from './HomeMainBottomTabNavigator';
import LoginNavigator from '../../modules/Login/loginNavigator';

import { AUTH_REDUCER } from '../dataStore/reducers/reducerTypes';

const Stack = createStackNavigator();

function App() {
  const isLoggedIn = useSelector(state => state[AUTH_REDUCER].isLoggedIn);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen
            name="HomeMainBottomTabNavigator"
            component={HomeMainBottomTabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="loginNavigator"
            component={LoginNavigator}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
