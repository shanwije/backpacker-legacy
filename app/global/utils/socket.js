import io from 'socket.io-client';
import config from '../../config';

const socket = io(config.SOCKET_IO_IP);

export default socket;
