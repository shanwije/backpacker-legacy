import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import { navigationRef } from '../../../../global/navigation/NavigationService';
import signUpEmail from './SignUpSetEmailView';
import signUpEmailToken from './SignUpSetEmailTokenView';
import signIn from './SignInView';
import signUpPassword from './SignUpSetPasswordView';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import { loginScreens } from '../../../../global/navigation/screens';
import AppTitle from './../../../../global/components/AppTitle';

const Stack = createStackNavigator();

function LoginNavigator() {
    const isSignUp = useSelector(state => state[LOGIN_REDUCER].isSignUp);

    const config = {
        animation: 'spring',
        config: {
            stiffness: 1000,
            damping: 50,
            mass: 3,
            overshootClamping: false,
            restDisplacementThreshold: 0.01,
            restSpeedThreshold: 0.01,
            duration: 500,
        },
    };

    const closeConfig = {
        animation: 'timing',
        config: {
            duration: 500,
            easeIn: 'linear',
        },
    };

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerStyle: {
                        backgroundColor: 'transparent',
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitle: props => <AppTitle {...props} />,
                    title: 'Centered title',
                    headerShown: true,
                    headerTitleAlign: 'center',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
                // headerMode={false}
                animation="fade">
                <Stack.Screen
                    name={loginScreens.SIGN_IN_SCREEN}
                    component={signIn}
                />
                <Stack.Screen
                    name={loginScreens.SIGN_UP_SCREEN_EMAIL}
                    component={signUpEmail}
                />
                <Stack.Screen
                    name={loginScreens.SIGN_UP_SCREEN_EMAIL_TOKEN}
                    component={signUpEmailToken}
                />
                <Stack.Screen
                    name={loginScreens.SIGN_UP_SCREEN_PASSWORD}
                    component={signUpPassword}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default LoginNavigator;
