import React from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import FormWrapper from '../../../../global/components/FormWrapper';
import styles from './styles';
import LoginHeaderText from '../../../../global/components/LoginHeaderText';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {
    NOTIFICATION_REDUCER,
    LOGIN_REDUCER,
} from '../../../../global/dataStore/reducers/reducerTypes';
import { BackHandler } from 'react-native';
import PageWrapper from '../../../../global/components/PageWrapper';
import themes from '../../../../global/utils/ThemeContext';

export default function SignUpSetEmailTokenView({ navigation }) {
    const theme = useTheme();
    const email = useSelector(state => state[LOGIN_REDUCER].email);
    const dispatch = useDispatch();
    const submitAuthToken = tokenInput =>
        dispatch(loginActions.setEmailAuthToken(tokenInput, navigation));

    const resendToken = () =>
        dispatch(loginActions.setEmail(email, navigation));

    return (
        <PageWrapper type={0} theme={theme}>
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
                            codeInputFieldStyle={{
                                color: themes.light.colors.text,
                                ...styles.otpInputField,
                            }}
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
        </PageWrapper>
    );
}
