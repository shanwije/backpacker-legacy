/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const AppTitle = props => (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text
            style={{
                fontSize: 30,
                fontWeight: '700',
                textAlign: 'center',
                fontStyle: 'italic',
            }}
            {...props}>
            {props.title || 'BACKPACKER'}
        </Text>
    </View>
);

export default AppTitle;
