import React from 'react';
import {
    ActivityIndicator,
    StatusBar,
    StyleSheet,
    Platform,
    StatusBarIOS,
} from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider as PaperProvider } from 'react-native-paper';
import AppSnackBar from './global/components/AppSnackBar';
import Navigator from './global/navigation';
import configureStore from './global/dataStore/configureStore';
import themes from './global/utils/ThemeContext';

const { persistor, store } = configureStore();

export default function EntryPoint() {
    return (
        <Provider store={store}>
            <PersistGate loading={<ActivityIndicator />} persistor={persistor}>
                <PaperProvider theme={themes.light}>
                    <Navigator />
                    <AppSnackBar />
                </PaperProvider>
            </PersistGate>
        </Provider>
    );
}
