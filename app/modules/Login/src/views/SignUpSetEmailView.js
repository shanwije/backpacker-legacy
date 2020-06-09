import React, { useState, useEffect } from 'react';
import { View, ImageBackground } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import * as loginActions from '../Actions';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';

import styles from './styles';
import { LOGIN_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import AppTitle from '../../../../global/components/AppTitle';
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';
import { loginScreens } from '../../../../global/navigation/screens';

export default function SignUpSetEmailView({ navigation }) {
    const dispatch = useDispatch();
    const [email, disableSubmitByEmail, setEmail] = useFormInput(
        inputTypes.EMAIL,
        true,
        useSelector(state => state[LOGIN_REDUCER].email),
    );

    const setEmailAddress = () =>
        dispatch(loginActions.setEmail(email.value, navigation));

    return (
        <View style={styles.container}>
            <AppTitle />
            <View style={styles.topInnerContainer}>
                <FormWrapper formHeader="Please provide your email address">
                    <TextBox
                        label="Email"
                        autoCompleteType="email"
                        importantForAutofill="auto"
                        keyboardType="email-address"
                        textAlign="center"
                        textContentType="emailAddress"
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
                                navigation.navigate(loginScreens.SIGN_IN_SCREEN)
                            }>
                            Sign IN
                        </Button>
                    </View>
                </FormWrapper>
            </View>
        </View>
    );
}
