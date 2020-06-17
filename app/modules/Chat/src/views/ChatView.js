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
import getSocketInstance from '../../../../global/utils/socket';
import {
    AUTH_REDUCER,
    LOGIN_REDUCER,
    WEB_SOCKET_REDUCER,
} from '../../../../global/dataStore/reducers/reducerTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function MainView() {
    const [messages, setMessages] = useState([]);
    // const [socket, setSocket] = useState(getSocketInstance());
    const socket = useSelector(state => state[WEB_SOCKET_REDUCER].webSocket);
    const jwtToken = useSelector(state => state[AUTH_REDUCER].authToken);
    const socketSend = (webSocket, event, payload) => {
        const data = { jwtToken, payload };
        console.log(data);
        webSocket.emit(event, data);
    };

    const onSend = (newMessages = []) => {
        console.log('latest', newMessages[0]);
        socketSend(socket, 'message', newMessages[0].text);
        setMessages(prevMessages =>
            GiftedChat.append(prevMessages, newMessages),
        );
        console.log('on send all messages', messages);
    };
    //
    // socket.on('disconnect', () => {
    //     socket.open();
    // });

    useEffect(() => {
        socket.on('message', newMessages => {
            setMessages(prevMessages =>
                GiftedChat.append(prevMessages, newMessages),
            );
            console.log('received messages ', newMessages);
        });
        socket.on('connectedUsers', users => {
            console.log(JSON.stringify(users, null, '\t'));
        });
        socket.on('error', error => {
            console.log('socket error', error);
        });
        // return () => {
        //     socket.emit('disconnectSocket');
        //     socket.close();
        // };
    }, []);
    return (
        <View style={{ flex: 1, alignContent: 'flex-end' }}>
            <GiftedChat
                messages={messages}
                onSend={messages => onSend(messages)}
                user={{
                    _id: 1,
                }}
            />
        </View>
    );
}
