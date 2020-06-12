import React from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import backgroundImage from '../../assets/images/bg.jpg';
import styles from '../../modules/Login/src/views/styles';
import _ from 'lodash';

//todo remove below content if background images are not using in the application
const PageWrapper = props => (
    <>
        <StatusBar
            backgroundColor={props.theme.colors.background}
            barStyle={props.theme.dark ? 'light-content' : 'dark-content'}
        />

        {!_.isString('s') ? (
            <ImageBackground
                source={backgroundImage}
                width={null}
                style={styles.backgroundImage}>
                {props.children}
            </ImageBackground>
        ) : (
            <View
                style={{
                    backgroundColor: props.theme.colors.onBackground,
                    flex: 1,
                }}>
                {props.children}
            </View>
        )}
    </>
);

export default PageWrapper;
