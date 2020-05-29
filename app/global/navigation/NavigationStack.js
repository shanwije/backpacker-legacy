import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from './NavigationService';

import Login from '../../modules/Login/views/Login';
import Home from './../../modules/Home';

import { LOGIN_REDUCER } from './../dataStore/reducers/reducerTypes';

const Stack = createStackNavigator();

const homeOptions = {
  title: 'My home',
  headerStyle: {
    backgroundColor: '#000',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function App() {
  const isLoggedIn = useSelector(state => state[LOGIN_REDUCER].isLoggedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        {isLoggedIn ? (
          <Stack.Screen name="Home" component={Home} options={homeOptions} />
        ) : (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              // When logging out, a pop animation feels intuitive
              // You can remove this if you want the default 'push' animation
              animationTypeForReplace: isLoggedIn ? 'push' : 'pop',
              headerShown: false,
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
