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
import AppTitle from '../components/AppTitle';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import { StatusBar } from 'react-native';
import themes from '../utils/ThemeContext';

const Stack = createStackNavigator();

function App() {
    const theme = useTheme();
    const isLoggedIn = useSelector(state => state[AUTH_REDUCER].isLoggedIn);
    return (
        <NavigationContainer theme={theme}>
            <StatusBar
                backgroundColor={theme.colors.background}
                barStyle={theme.dark ? 'light-content' : 'dark-content'}
            />
            <Stack.Navigator
                screenOptions={{
                    gestureEnabled: true,
                    gestureDirection: 'horizontal',
                    headerStyle: {
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
                headerMode={false}>
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
