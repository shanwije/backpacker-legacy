import React, { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from './../../../Login/src/Actions';
import styles from './styles';

// socket io
import io from 'socket.io-client';
import config from '../../../../config';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';

export default function MainView() {
    // const dispatch = useDispatch();
    // const onLogout = () => dispatch(loginActions.logOut());
    const [chatInput, disableChatInput, setChatInput] = useFormInput();
    const socket = useRef(null);

    const send = () => {
        console.log(chatInput);
        socket.current.emit('message', chatInput);
    };

    useEffect(() => {
        socket.current = io(config.SOCKET_IO_IP);
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Hello world</Text>
            <TextBox
                label="chat"
                // autoCompleteType="email"
                importantForAutofill="auto"
                // keyboardType="email-address"
                textAlign="center"
                // textContentType="emailAddress"
                // for smooth navigation through inputs
                // "done","go","next","search","send","none","previous","default","emergency-call","google","join","route","yahoo"
                blurOnSubmit={false}
                autoCorrect={true}
                autoFocus={true}
                returnKeyType="next"
                {...chatInput}
            />
            <Button
                style={{ bottom: 0 }}
                icon="logout"
                mode="contained"
                onPress={send}>
                Send
            </Button>
            {/*<Button*/}
            {/*    style={{ bottom: 0 }}*/}
            {/*    icon="logout"*/}
            {/*    mode="contained"*/}
            {/*    onPress={onLogout}>*/}
            {/*    Logout*/}
            {/*</Button>*/}
        </View>
    );
}
