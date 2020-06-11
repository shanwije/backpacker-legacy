import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
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
    //set token
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
            />
            <View style={styles.topInnerContainer}>
                <FormWrapper>
                    <OTPInputView
                        style={{ height: 80, marginBottom: 100 }}
                        codeInputFieldStyle={{
                            borderWidth: 0,
                            borderBottomWidth: 3,
                            color: '#000',
                            fontSize: 25,
                        }}
                        codeInputHighlightStyle={{ borderColor: '#001ba0' }}
                        autoFocusOnLoad
                        pinCount={5}
                        onCodeFilled={code => {
                            submitAuthToken(code);
                        }}
                        placeholderCharacter={'0'}
                        placeholderTextColor={'rgba(0, 0, 0, 0.3)'}
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
