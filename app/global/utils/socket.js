import io from 'socket.io-client';
import config from '../../config';
import { useSelector } from 'react-redux';
import { AUTH_REDUCER } from '../dataStore/reducers/reducerTypes';
import { useEffect } from 'react';
import configureStore from '../dataStore/configureStore';

const getSocketInstance = () => {
    const { store } = configureStore();
    const authToken = store.getState().auth.authToken;
    console.log('get socket instance running');
    return io(config.SOCKET_IO_IP, {
        extraHeaders: {
            Authorization: `bearer ${authToken}`,
        },
    });
};

// const socket = io(config.SOCKET_IO_IP, {
//     extraHeaders: {
//         Authorization: `bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlZTM4NzM5N2U5MWRhNDY3MWMzOWVhYiIsImVtYWlsIjoic2hhbncud29ya0BnbWFpbC5jb20iLCJpYXQiOjE1OTIzMjE3NjMsImV4cCI6MTYwMDk2MTc2M30.QPz80v7mYGVLTiclND-Wsv1g3ZLzP7vq07sholMmErw'}`,
//     },
// });

// export const getSocket = () => socket;

export default getSocketInstance;
