import React from 'react';
import { View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const loginHeaderText = props => {
    const { colors, fonts } = props.theme;
    return (
        <View
            style={{
                width: '100%',
                padding: RFValue(20),
                marginTop: RFValue(10),
                marginBottom: RFValue(10),
                height: '30%',
            }}>
            <Text style={{ textAlign: 'left', ...fonts.large }}>
                {props.headerText}
            </Text>
            <Text
                style={{
                    textAlign: 'left',
                    ...fonts.regular,
                }}>
                {props.subHeaderText}
            </Text>
        </View>
    );
};

export default loginHeaderText;
