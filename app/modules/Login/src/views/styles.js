import { StyleSheet } from 'react-native';

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

    // login: {
    //   padding: 8,
    // },
    // formElement: {
    //   fontSize: 20,
    //   marginTop: 10,
    //   marginBottom: 10,
    //   // flex: 1
    //   left: 20,
    //   width: '100%',
    // },
    // backgroundImage: {
    //     flex: 1,
    //     resizeMode: 'cover',
    //     justifyContent: 'center',
    //     alignContent: 'center',
    //     width: null,
    //     height: null,
    // },

    // mainTitleText: {
    //     color: '#fff',
    //     fontSize: 30,
    //     textAlign: 'center',
    //     marginBottom: 30,
    //     fontWeight: '500',
    // },
    forgotPasswordView: {
        marginTop: 10,
        flexDirection: 'column',
    },
    signUpView: {
        margin: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default styles;
