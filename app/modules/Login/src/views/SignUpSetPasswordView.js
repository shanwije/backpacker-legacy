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

export default function SignUpSetPasswordView({ navigation }) {
    const theme = useTheme();
    const initialPassword = useSelector(state => state[LOGIN_REDUCER].password);
    console.log('initialEmail', initialPassword);
    const dispatch = useDispatch();
    const [password, disableSubmitByPassword, setPassword] = useFormInput(
        inputTypes.PASSWORD,
        false,
    );
    const [showPassword, setShowPassword] = useState(false);

    const setUserPassword = () =>
        dispatch(loginActions.setPassword(password.value, navigation));

    return (
        <PageWrapper type={0} theme={theme}>
            <View style={styles.container}>
                <LoginHeaderText
                    headerText="Password"
                    subHeaderText="Let's setup a password for you"
                    theme={theme}
                />
                <View style={styles.topInnerContainer}>
                    <FormWrapper>
                        <TextBox
                            label="Password"
                            secureTextEntry={!showPassword}
                            autoCompleteType="password"
                            importantForAutofill="auto"
                            textAlign="center"
                            textContentType="password"
                            // for smooth navigation through inputs
                            // blurOnSubmit={false}
                            returnKeyType={
                                disableSubmitByPassword ? 'default' : 'send'
                            }
                            onSubmitEditing={() =>
                                disableSubmitByPassword ? '' : setUserPassword()
                            }
                            {...password}
                            icon={{
                                icon: showPassword ? 'eye' : 'eye-off',
                                disabled: false,
                                animated: true,
                                accessibilityLabel: 'textBox icon',
                                onPress: val => setShowPassword(!showPassword),
                            }}
                        />
                        <Button
                            icon="login"
                            mode="contained"
                            type="submit"
                            value="Submit"
                            disabled={disableSubmitByPassword}
                            onPress={() => setUserPassword()}>
                            Sign UP
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
