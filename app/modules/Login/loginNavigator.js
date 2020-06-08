import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from '../../global/navigation/NavigationService';
import signUp from './src/views/SignUpView';
import signIn from './src/views/SignInView';
import { LOGIN_REDUCER } from '../../global/dataStore/reducers/reducerTypes';
import HomeMainBottomTabNavigator from '../../global/navigation/HomeMainBottomTabNavigator';

const Stack = createStackNavigator();

function LoginNavigator() {
    const isSignUp = useSelector(state => state[LOGIN_REDUCER].isSignUp);
    console.log('CCCCCCCCCCCCCCCCCCCCCCC', isSignUp);
    return (
        <NavigationContainer ref={navigationRef} independent={true}>
            <Stack.Navigator>
                {isSignUp ? (
                    <Stack.Screen
                        name="sign-up-page-01"
                        component={signUp}
                        options={{ headerShown: false }}
                    />
                ) : (
                    <Stack.Screen
                        name="signIn"
                        component={signIn}
                        options={{
                            headerShown: false,
                        }}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default LoginNavigator;
