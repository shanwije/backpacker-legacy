/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { TextInput, IconButton, HelperText } from 'react-native-paper';

const TextBox = props => {
    const draggingDistance = typeof props.icon === 'object' ? 20 : 0;

    const wrapper = (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TextInput
                    style={{
                        // fontSize: 20,
                        marginTop: 5,
                        // marginBottom: 10,
                        left: draggingDistance,
                        width: '100%',
                        backgroundColor: 'transparent',
                    }}
                    mode="flat"
                    enablesReturnKeyAutomatically={true}
                    {...props}
                />
                {props.icon && (
                    <IconButton
                        style={{ right: 30 }}
                        icon={props.icon}
                        size={draggingDistance}
                        {...props.icon}
                    />
                )}
            </View>
            <HelperText type="error" visible={props.error}>
                {props.errorText}
            </HelperText>
        </View>
    );

    return wrapper;
};

export default TextBox;
