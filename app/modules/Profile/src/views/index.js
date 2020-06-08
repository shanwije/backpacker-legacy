import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from './../../../Login/src/Actions';
import styles from './styles';

export default function MainView() {
    const dispatch = useDispatch();
    const onLogout = () => dispatch(loginActions.logOut());

    return (
        <View style={styles.container}>
            <Button
                icon="logout"
                mode="contained"
                onPress={() => console.log('profile button pressed')}>
                Profile
            </Button>
        </View>
    );
}
