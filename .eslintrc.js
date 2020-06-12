module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['prettier', 'react-hooks'],
    rules: {
        'prettier/prettier': ['error'],
        'no-unused-vars': 'off',
        'react-native/no-inline-styles': 'off',
        "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
        "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    },
};
