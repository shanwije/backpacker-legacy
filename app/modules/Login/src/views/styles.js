import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',

        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'flex-start',
        alignItems: 'center',
        // backgroundColor: '#121212'
    },
    topInnerContainer: {
        flex: 3,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'flex-start',
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignContent: 'center',
        width: null,
        height: null,
    },
    // formButton: {
    //   // height: 50,
    //   justifyContent: 'center',
    //   marginTop: 5,
    //   // backgroundColor: 'rgba(181, 181, 181, 1)',
    // },
    mainTitleText: {
        color: '#fff',
        fontSize: 30,
        textAlign: 'center',
        marginBottom: 30,
        fontWeight: '500',
    },
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
