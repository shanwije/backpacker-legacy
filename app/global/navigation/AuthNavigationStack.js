import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import {
    createStackNavigator,
    TransitionPresets,
} from '@react-navigation/stack';
import { useSelector } from 'react-redux';

import HomeMainBottomTabNavigator from './HomeMainBottomTabNavigator';
import LoginNavigator from '../../modules/Login/src/views/loginNavigator';

import { AUTH_REDUCER } from '../dataStore/reducers/reducerTypes';
import { useTheme } from 'react-native-paper';
import AppTitle from '../components/AppTitle';

const Stack = createStackNavigator();

function App() {
    const { colors } = useTheme();
    const MyTheme = {
        colors: {
            ...DefaultTheme.colors,
            backgroundColor: colors.background,
            headerTintColor: colors.text,
            primary: colors.primary,
        },
    };
    const isLoggedIn = useSelector(state => state[AUTH_REDUCER].isLoggedIn);
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerStyle: {
                        backgroundColor: colors.background,
                        // text: colors.text,
                        primary: colors.primary,
                        borderTopWidth: 0,
                        elevation: 0,
                        shadowOpacity: 0,
                    },
                    headerTitleStyle: {
                        color: 'white',
                    },
                    headerTitle: props => <AppTitle {...props} />,
                    title: 'Centered title',
                    headerShown: true,
                    headerTitleAlign: 'center',
                    ...TransitionPresets.SlideFromRightIOS,
                }}
                headerMode={false}
                animation="fade">
                {isLoggedIn ? (
                    <Stack.Screen
                        name="HomeMainBottomTabNavigator"
                        component={HomeMainBottomTabNavigator}
                    />
                ) : (
                    <Stack.Screen
                        name="loginNavigator"
                        component={LoginNavigator}
                    />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
