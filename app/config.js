const _devConfig = {
  BASE_URL:
    'http://BackpackerApi-env.eba-fsr7nftp.us-east-2.elasticbeanstalk.com:8080/api/v1/',
};
const _productionConfig = {
  BASE_URL:
    'http://BackpackerApi-env.eba-fsr7nftp.us-east-2.elasticbeanstalk.com:8080/api/v1/',
};

const config = __DEV__ ? _devConfig : _productionConfig;

export default config;
