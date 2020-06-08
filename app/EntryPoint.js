import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppSnackBar from './global/components/AppSnackBar';
import Navigator from './global/navigation';
import configureStore from './global/dataStore/configureStore';

const { persistor, store } = configureStore();

const customTheme = {
    // dark: true,
    roundness: 5,
    colors: {
        primary: '#1241d4',
        accent: '#003035',
        background: '#656cff',
        surface: '#001ba0',
        error: '#B00020',
        text: '#000000',
        onBackground: '#ffffff',
        onSurface: '#ffffff',
        disabled: 'rgba(0, 0, 0, 0.26)',
        placeholder: 'rgba(0, 0, 0, 0.54)',
        backdrop: 'rgba(0, 0, 0, 0.5)',
        notification: '#003035',
    },
    fonts: {
        regular: {
            fontFamily: 'sans-serif',
            fontWeight: 'normal',
        },
        medium: {
            fontFamily: 'sans-serif-medium',
            fontWeight: 'normal',
        },
        light: {
            fontFamily: 'sans-serif-light',
            fontWeight: 'normal',
        },
        thin: {
            fontFamily: 'sans-serif-thin',
            fontWeight: 'normal',
        },
    },
    animation: {
        scale: 2,
    },
};

export default function EntryPoint() {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <PaperProvider theme={customTheme}>
                    <Navigator />
                    <AppSnackBar />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
