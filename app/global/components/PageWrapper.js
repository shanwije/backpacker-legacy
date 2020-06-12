import React from 'react';
import { ImageBackground, View, StatusBar } from 'react-native';
import backgroundImage from '../../assets/images/bg.jpeg';
import styles from '../../modules/Login/src/views/styles';
import _ from 'lodash';

//todo remove below content if background images are not using in the application
const PageWrapper = props => (
    <>
        {/*    <ImageBackground*/}
        {/*        source={backgroundImage}*/}
        {/*        width={null}*/}
        {/*        style={styles.backgroundImage}>*/}
        {props.children}
        {/*    </ImageBackground>*/}
    </>
);

export default PageWrapper;
