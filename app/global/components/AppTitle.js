/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, Image } from 'react-native';
import { Text } from 'react-native-paper';
import backgroundImage from './../../assets/images/backpacker_text_logo.png';

const AppTitle = props => (
    <View
        style={{
            height: 200,
            justifyContent: 'center',
            alignContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'row',
        }}>
        <Image
            style={{ alignSelf: 'center', height: '60%', width: '60%' }}
            source={backgroundImage}
        />
        {/*<Text*/}
        {/*    style={{*/}
        {/*        fontSize: 30,*/}
        {/*        fontWeight: '700',*/}
        {/*        textAlign: 'center',*/}
        {/*        // fontStyle: 'italic',*/}
        {/*        fontFamily: 'Cochin',*/}
        {/*    }}*/}
        {/*    {...props}>*/}
        {/*    {props.title || 'Backpacker'}*/}
        {/*</Text>*/}
    </View>
);

export default AppTitle;
