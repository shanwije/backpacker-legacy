/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { KeyboardAvoidingView, View, ScrollView } from 'react-native';
import { Surface, Text } from 'react-native-paper';

const FormWrapper = props => (

    <ScrollView bounces={true}>
        <KeyboardAvoidingView
            style={{
                paddingTop: '5%',
                paddingBottom: '5%',
                paddingLeft: 20,
                paddingRight: 20,


            }}>
            {props.children}
        </KeyboardAvoidingView>
    </ScrollView>

);

export default FormWrapper;
