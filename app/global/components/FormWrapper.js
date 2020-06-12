/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const FormWrapper = props => (
    <ScrollView bounces={true} keyboardShouldPersistTaps="always">
        <KeyboardAvoidingView
            style={{
                paddingTop: RFPercentage(5),
                paddingBottom: RFPercentage(5),
                paddingLeft: RFValue(20),
                paddingRight: RFValue(20),
            }}>
            {props.children}
        </KeyboardAvoidingView>
    </ScrollView>
);

export default FormWrapper;
