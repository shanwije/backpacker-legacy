import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
const fonts = {
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
};
const animation = {
    scale: 2,
};

const common = {
    roundness: 5,
    fonts,
    animation,
};
const themes = {
    light: {
        dark: false,
        colors: {
            primary: '#1241d4',
            accent: '#003035',
            background: '#ffffff',
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
        ...common,
    },
    dark: {
        dark: true,
        mode: 'adaptive',
        colors: {
            primary: '#656cff',
            accent: '#003035',
            background: '#121212',
            surface: '#001ba0',
            error: '#B00020',
            card: '#121212',
            text: '#e5e5e7',
            border: '#272729',
            disabled: 'rgba(255, 255, 255,  0.26)',
            placeholder: 'rgba(255, 255, 255, 0.54)',
            backdrop: 'rgba(255, 255, 255,  0.5)',
            notification: '#003035',
            headerTintColor: '#e5e5e7',
        },
        ...common,
    },
};

export default themes;
