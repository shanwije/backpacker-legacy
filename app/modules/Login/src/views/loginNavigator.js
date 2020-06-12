import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
    CardStyleInterpolators,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import signUpEmail from './SignUpSetEmailView';
import signUpEmailToken from './SignUpSetEmailTokenView';
import signIn from './SignInView';
import signUpPassword from './SignUpSetPasswordView';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import { loginScreens } from '../../../../global/navigation/screens';
import AppTitle from './../../../../global/components/AppTitle';
import { useTheme } from 'react-native-paper';
import { color } from 'react-native-reanimated';

const Stack = createStackNavigator();

function LoginNavigator() {
    const theme = useTheme();

    return (
        <NavigationContainer independent={true} theme={theme}>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerStyle: {
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitle: props => (
                        <AppTitle dark={theme.dark} {...props} />
                    ),
                    title: 'Centered title',
                    headerShown: true,
                    headerTitleAlign: 'center',
                    // ...TransitionPresets.SlideFromRightIOS,
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
