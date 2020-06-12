/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View } from 'react-native';
import { HelperText, IconButton, TextInput } from 'react-native-paper';
import { RFValue } from 'react-native-responsive-fontsize';

const TextBox = props => {
    const draggingDistance = typeof props.icon === 'object' ? RFValue(20) : 0;

    return (
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
                        marginTop: RFValue(5),
                        // marginBottom: 10,
                        left: draggingDistance,
                        width: '100%',
                        backgroundColor: 'transparent',
                    }}
                    mode="flat"
                    enablesReturnKeyAutomatically={true}
                    maxLength={props.maxLength ? props.maxLength : 35}
                    {...props}
                />
                {props.icon && (
                    <IconButton
                        style={{ right: RFValue(30), marginBottom: 0 }}
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
};

export default TextBox;
