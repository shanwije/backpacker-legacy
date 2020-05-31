/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Surface, Text } from 'react-native-paper';

const FormWrapper = props => (
  <Surface
    style={{
      padding: 10,
      elevation: 4,
      backgroundColor: 'rgba(255, 255, 255, 0.6)',
    }}
    {...props}>
    {props.formHeader && (
      <Text
        style={{
          fontWeight: '600',
          fontSize: 18,
          textAlign: 'center',
          marginBottom: 10,
          marginTop: 10,
        }}>
        {props.formHeader}
      </Text>
    )}
    {props.children}
  </Surface>
);

export default FormWrapper;
