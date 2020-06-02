/* eslint-disable no-alert */
import React, { Component } from 'react';
import { View } from 'react-native';
import { LoginButton } from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
  render() {
    return (
      <View>
        <LoginButton
          publishPermissions={['email']}
          onLoginFinished={(error, result) => {
            if (error) {
              console.log('error', error);
              alert('Login failed with error: ' + error.message);
            } else {
              console.log('result', result);
              if (result.isCancelled) {
                alert('Login was cancelled');
              } else {
                alert(
                  'Login was successful with permissions: ' +
                    result.grantedPermissions,
                );
              }
            }
          }}
          onLogoutFinished={() => alert('User logged out')}
        />
      </View>
    );
  }
}

module.exports = FBLoginButton;
