/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import backgroundImage from './../../assets/images/backpacker_text_logo.png';

const AppTitle = props => (
    <View
        style={{
            height: 70,
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
            top: 0,
            // position: 'absolute',
            // width: '100%',
        }}>
        <Image
            style={{
                alignSelf: 'center',
                height: 40,
                width: 100,
                marginTop: 5,
            }}
            source={backgroundImage}
        />
    </View>
);

export default AppTitle;
