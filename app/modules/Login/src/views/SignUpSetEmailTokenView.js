import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import FormWrapper from '../../../../global/components/FormWrapper';
import styles from './styles';
import { loginScreens } from '../../../../global/navigation/screens';
import LoginHeaderText from '../../../../global/components/LoginHeaderText';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
    NOTIFICATION_REDUCER,
    LOGIN_REDUCER,
} from '../../../../global/dataStore/reducers/reducerTypes';
import { BackHandler } from 'react-native';

export default function SignUpSetEmailTokenView({ navigation }) {
    const theme = useTheme();
    const email = useSelector(state => state[LOGIN_REDUCER].email);
    const dispatch = useDispatch();
    const submitAuthToken = tokenInput =>
        dispatch(loginActions.setEmailAuthToken(tokenInput, navigation));

    const resendToken = () =>
        dispatch(loginActions.setEmail(email, navigation));

    return (
        <View style={styles.container}>
            <LoginHeaderText
                headerText="We sent you a code"
                subHeaderText={`Enter it below to verify ${email}`}
                theme={theme}
            />
            <View style={styles.topInnerContainer}>
                <FormWrapper>
                    <OTPInputView
                        style={styles.OTPInputView}
                        codeInputFieldStyle={styles.otpInputField}
                        codeInputHighlightStyle={{
                            borderColor: theme.colors.surface,
                        }}
                        autoFocusOnLoad
                        pinCount={5}
                        onCodeFilled={code => {
                            submitAuthToken(code);
                        }}
                        placeholderCharacter={'0'}
                        placeholderTextColor={theme.colors.placeholder}
                    />
                    <View style={styles.signUpView}>
                        <Text>Any problem? </Text>
                        <Button
                            mode="text"
                            compact={true}
                            onPress={() => resendToken()}>
                            RESEND VERIFICATION TOKEN
                        </Button>
                    </View>
                </FormWrapper>
            </View>
        </View>
    );
}
