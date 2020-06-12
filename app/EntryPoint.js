import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import {
    DarkTheme,
    Provider as PaperProvider,
    useTheme,
} from 'react-native-paper';
import AppSnackBar from './global/components/AppSnackBar';
import Navigator from './global/navigation';
import configureStore from './global/dataStore/configureStore';
import themes from './global/utils/ThemeContext';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const { persistor, store } = configureStore();

export default function EntryPoint() {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <AppearanceProvider>
                    <PaperProvider
                        theme={
                            useColorScheme() === 'dark'
                                ? themes.dark
                                : themes.light
                        }>
                        <Navigator />
                        <AppSnackBar />
                    </PaperProvider>
                </AppearanceProvider>
            </PersistGate>
        </Provider>
    );
}
