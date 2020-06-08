import React from 'react';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import AppSnackBar from './global/components/AppSnackBar';
import Navigator from './global/navigation';
import configureStore from './global/dataStore/configureStore';

const { persistor, store } = configureStore();

const theme = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
        ...DefaultTheme.colors,
        primary: '#000',
        accent: '#fff',
    },
};

export default function EntryPoint() {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <PaperProvider theme={theme}>
                    <StatusBar hidden />
                    <Navigator />
                    <AppSnackBar />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
