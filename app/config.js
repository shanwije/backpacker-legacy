const _devConfig = {
    BASE_URL: 'http://192.168.1.8:8080/api/v1/',
    SOCKET_IO_IP: 'http://192.168.1.8:8080',

    // BASE_URL:
    //     'http://BackpackerApi-env.eba-fsr7nftp.us-east-2.elasticbeanstalk.com:8080/api/v1/',
    // SOCKET_IO_IP:
    //     'http://BackpackerApi-env.eba-fsr7nftp.us-east-2.elasticbeanstalk.com:8080',

    STORE_ENCRYPT_SECRET: 'wa43f49hfa43nvg942b942g3w',
};
const _productionConfig = {
    BASE_URL:
        'http://BackpackerApi-env.eba-fsr7nftp.us-east-2.elasticbeanstalk.com:8080/api/v1/',
};

const config = __DEV__ ? _devConfig : _productionConfig;

export default config;
