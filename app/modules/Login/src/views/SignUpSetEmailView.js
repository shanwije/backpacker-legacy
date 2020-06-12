import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button, useTheme } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';

import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';
import { loginScreens } from '../../../../global/navigation/screens';
import LoginHeaderText from '../../../../global/components/LoginHeaderText';
import PageWrapper from '../../../../global/components/PageWrapper';

// todo remove unnecessary padding to the sides
export default function SignUpSetEmailView({ navigation }) {
    const theme = useTheme();
    const dispatch = useDispatch();
    const [email, disableSubmitByEmail, setEmail] = useFormInput(
        inputTypes.EMAIL,
        true,
        useSelector(state => state[LOGIN_REDUCER].email),
    );

    const setEmailAddress = () =>
        dispatch(loginActions.setEmail(email.value, navigation));

    return (
        <PageWrapper type={0} theme={theme}>
            <View style={styles.container}>
                <LoginHeaderText
                    headerText="Let's register"
                    subHeaderText="Please enter your email address"
                    theme={theme}
                />
                <View style={styles.topInnerContainer}>
                    <FormWrapper>
                        <TextBox
                            label="Email"
                            autoCompleteType="email"
                            importantForAutofill="auto"
                            keyboardType="email-address"
                            textAlign="center"
                            textContentType="emailAddress"
                            blurOnSubmit={true}
                            autoCorrect={true}
                            // autoFocus={false}
                            {...email}
                            returnKeyType={
                                disableSubmitByEmail ? 'default' : 'send'
                            }
                            onSubmitEditing={() =>
                                disableSubmitByEmail ? '' : setEmailAddress()
                            }
                        />
                        <Button
                            icon="login"
                            mode="contained"
                            type="submit"
                            value="Submit"
                            disabled={disableSubmitByEmail}
                            onPress={() => setEmailAddress()}>
                            NEXT
                        </Button>
                        <View style={styles.signUpView}>
                            <Text>Already have a Backpacker account? </Text>
                            <Button
                                mode="text"
                                compact={true}
                                onPress={() =>
                                    navigation.navigate(
                                        loginScreens.SIGN_IN_SCREEN,
                                    )
                                }>
                                Sign IN
                            </Button>
                        </View>
                    </FormWrapper>
                </View>
            </View>
        </PageWrapper>
    );
}
