import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { DarkTheme, Provider as PaperProvider } from 'react-native-paper';
import AppSnackBar from './global/components/AppSnackBar';
import Navigator from './global/navigation';
import configureStore from './global/dataStore/configureStore';
import themes from './global/utils/ThemeContext';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';

const { persistor, store } = configureStore();

export default function EntryPoint() {
    const colorScheme = useColorScheme();
    return (
        <Provider store={store}>
            <AppearanceProvider>
                <PersistGate
                    // loading={<ActivityIndicator />}
                    persistor={persistor}>
                    <PaperProvider
                        theme={
                            colorScheme === 'dark' ? themes.dark : themes.light
                        }>
                        <Navigator style={{ backgroundColor: 'black' }} />
                        <AppSnackBar />
                    </PaperProvider>
                </PersistGate>
            </AppearanceProvider>
        </Provider>
    );
}
