import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import themes from './../../../../global/utils/ThemeContext';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    topInnerContainer: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    forgotPasswordView: {
        marginTop: RFValue(10),
        marginBottom: RFValue(10),
        flexDirection: 'column',
    },
    signUpView: {
        margin: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    OTPInputView: { height: RFValue(80), marginBottom: RFValue(100) },
    otpInputField: {
        borderWidth: 0,
        borderBottomWidth: RFValue(3),
        //todo update this value once dark, light mode update
        color: themes.light.colors.text,
        fontSize: RFValue(25),
    },
});

export default styles;
