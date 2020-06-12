/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import backgroundImageLight from './../../assets/images/backpacker_text_logo.png';
import backgroundImageDark from './../../assets/images/backpacker_text_logo_dark.png';

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
            source={props.dark ? backgroundImageLight : backgroundImageDark} // if theme is dark send the light image
        />
    </View>
);

export default AppTitle;
