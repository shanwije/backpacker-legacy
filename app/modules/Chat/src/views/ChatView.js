import React, { useContext, useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { WEB_SOCKET_REDUCER } from '../../../../global/dataStore/reducers/reducerTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function MainView() {
    const [messages, setMessages] = useState([]);
    const socket = useSelector(state => state[WEB_SOCKET_REDUCER].webSocket);
    const socketSend = (webSocket, event, payload) => {
        const data = { payload };
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

    useEffect(() => {
        // make sure socket is initiating before the page renders.
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
