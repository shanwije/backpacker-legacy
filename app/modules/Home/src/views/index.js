import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { Button, Text, TextInput, List, Scroll } from 'react-native-paper';

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
import socket from '../../../../global/utils/socket';

export default function MainView() {
    // const dispatch = useDispatch();
    // const onLogout = () => dispatch(loginActions.logOut());
    const [chatInput, disableChatInput, setChatInput] = useFormInput();
    const [receivedMsges, setReceivedMsges] = useState(['sddsdsd', 'sdsdsds']);

    const send = () => {
        console.log(chatInput);
        socket.emit('message', chatInput);
        setChatInput('');
    };

    // socket.emit('HELLO_THERE');
    const [connected, setConnected] = useState(false);
    // IT IS HERE
    useEffect(() => {
        socket.on('message', m => setReceivedMsges(s => [...s, m]));
    }, []);

    return (
        <View style={{ flex: 1, justifyContent: 'flex-start' }}>
            <Text>Hello world</Text>
            {connected ? (
                <Text>Welcome from server!</Text>
            ) : (
                <Text>Not connected yet...</Text>
            )}
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
            <View>
                {receivedMsges.map(msg => (
                    <Text key={msg.value}>{msg.value}</Text>
                    // <List.Item title={'user1'} description={msg.value} />
                ))}
            </View>

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
