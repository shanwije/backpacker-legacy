import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const loginHeaderText = props => (
    <View
        style={{
            width: '100%',
            padding: 20,
            marginTop: 10,
            marginBottom: 10,
            height: '30%',
        }}>
        <Text style={{ fontSize: 35, textAlign: 'left' }}>
            {props.headerText}
        </Text>
        <Text style={{ fontSize: 17, textAlign: 'left', marginTop: 10 }}>
            {props.subHeaderText}
        </Text>
    </View>
);

export default loginHeaderText;
