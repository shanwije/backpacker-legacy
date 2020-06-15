import io from 'socket.io-client';
import config from '../../config';
import { useSelector } from 'react-redux';
import { AUTH_REDUCER } from '../dataStore/reducers/reducerTypes';
import { useEffect } from 'react';

const useSocket = () => {
    const authToken = useSelector(state => state[AUTH_REDUCER].authToken);

    useEffect(() => {}, []);
    return io(config.SOCKET_IO_IP, {
        extraHeaders: {
            Authorization: `bearer ${authToken}`,
        },
    });
};

export default useSocket;
