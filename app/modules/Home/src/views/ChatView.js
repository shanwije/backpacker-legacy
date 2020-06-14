import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View, Platform, KeyboardAvoidingView } from 'react-native';
import { Button, Text, TextInput, List, Scroll } from 'react-native-paper';
import { GiftedChat } from 'react-native-gifted-chat';

// socket io
import io from 'socket.io-client';
import config from '../../../../config';
import TextBox from '../../../../global/components/TextBox';
import FormWrapper from '../../../../global/components/FormWrapper';
import useFormInput from '../../../../global/customHooks/useFormInput';
import inputTypes from '../../../../global/const/InputTypes';
import socket from '../../../../global/utils/socket';
import { AUTH_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function MainView() {
    const [receivedMsges, setReceivedMsges] = useState([]);
    const authToken = useSelector(state => state[AUTH_REDUCER].authToken);

    const onSend = messages => {
        socket.emit('message', {
            messageText: messages[0].text,
            token: authToken,
        });
        setReceivedMsges(previousState =>
            GiftedChat.append(previousState, messages),
        );
    };

    useEffect(() => {
        socket.on('message', message =>
            setReceivedMsges(previousState =>
                GiftedChat.append(previousState, message),
            ),
        );
    }, []);
    return (
        <View style={{ flex: 1, alignContent: 'flex-end' }}>
            <GiftedChat
                messages={receivedMsges}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
}
