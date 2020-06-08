module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['prettier'],
    rules: {
        'prettier/prettier': ['error'],
        'no-unused-vars': 'off',
        'react-native/no-inline-styles': 'off',
    },
};
