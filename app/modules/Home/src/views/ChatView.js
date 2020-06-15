import React, { useContext, useEffect, useRef, useState } from 'react';
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
import useSocket from '../../../../global/utils/socket';
import { AUTH_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function MainView() {
    const [receivedMsges, setReceivedMsges] = useState([]);
    const authToken = useSelector(state => state[AUTH_REDUCER].authToken);
    const socket = useSocket();

    const onSend = messages => {
        socket.emit('message', messages[0].text);

        setReceivedMsges(previousState => {
            console.log('from onsend', previousState);
            return GiftedChat.append(previousState, messages);
        });
    };

    useEffect(() => {
        socket.on('message', message =>
            setReceivedMsges(previousState => {
                console.log('from useeffect ', previousState);
                return GiftedChat.append(previousState, message);
            }),
        );
        socket.on('connectedUsers', users => {
            console.log(JSON.stringify(users, null, '\t'));
        });
        socket.on('error', error => {
            console.log(error);
        });

        return () => {
            socket.disconnect();
        };
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
