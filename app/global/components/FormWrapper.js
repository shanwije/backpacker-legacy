/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { KeyboardAvoidingView, View } from 'react-native';
import { Surface, Text } from 'react-native-paper';

const FormWrapper = props => (
    <View
        behavior="position"
        style={{
            padding: 20,
            // elevation: 4,
            // backgroundColor: 'rgba(255, 255, 255, 0.6)',
        }}>
        {/*<View*/}

        {/*    {...props}>*/}
        {props.formHeader && (
            <Text
                style={{
                    fontWeight: '600',
                    fontSize: 18,
                    textAlign: 'center',
                    marginBottom: 10,
                    marginTop: 10,
                }}>
                {props.formHeader}
            </Text>
        )}
        {props.children}
        {/*</View>*/}
    </View>
);

export default FormWrapper;
