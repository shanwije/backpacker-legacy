import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

const themes = {
    light: {
        dark: false,
        roundness: 5,
        mode: 'adaptive',
        colors: {
            primary: '#1241d4',
            accent: '#003035',
            background: '#656cff',
            surface: '#001ba0',
            error: '#B00020',
            text: '#000000',
            onBackground: '#ffffff',
            onSurface: '#ffffff',
            disabled: 'rgba(0, 0, 0, 0.26)',
            placeholder: 'rgba(0, 0, 0, 0.54)',
            backdrop: 'rgba(0, 0, 0, 0.5)',
            notification: '#003035',
        },
        fonts: {
            large: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
                fontSize: RFValue(35),
                marginTop: RFValue(10),
                marginBottom: RFValue(10),
            },
            regular: {
                fontFamily: 'sans-serif',
                fontWeight: 'normal',
                fontSize: RFValue(15),
            },
            medium: {
                fontFamily: 'sans-serif-medium',
                fontWeight: 'normal',
            },
            light: {
                fontFamily: 'sans-serif-light',
                fontWeight: 'normal',
            },
            thin: {
                fontFamily: 'sans-serif-thin',
                fontWeight: 'normal',
            },
        },
        animation: {
            scale: 2,
        },
    },
};

export default themes;
