import React from 'react';
import _ from 'lodash';
import { Snackbar, Text, useTheme } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { NOTIFICATION_REDUCER } from '../dataStore/reducers/reducerTypes';
import { clearNotification } from '../dataStore/actions/notificationActions';

const AppSnackBar = props => {
    const theme = useTheme();
    const message = useSelector(state => state[NOTIFICATION_REDUCER].message);
    const code = useSelector(state => state[NOTIFICATION_REDUCER].code);
    const notificationColor =
        _.toString(code).charAt(0) > 2 ? theme.colors.error : theme.colors.text;

    const dispatch = useDispatch();
    return (
        <Snackbar
            accessibilityignoresinvertcolors={true}
            theme={{ colors: { text: theme.colors.text } }}
            visible={_.get(message, 'length', 0) > 0}
            onDismiss={val => console.log('dismiss', val)}
            action={{
                label: 'clear',
                onPress: () => {
                    dispatch(clearNotification());
                },
            }}>
            <Text style={{ color: notificationColor }}> {message}</Text>
        </Snackbar>
    );
};

export default AppSnackBar;
