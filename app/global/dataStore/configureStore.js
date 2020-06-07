import { createStore, compose, applyMiddleware } from 'redux';
import {
  persistStore,
  persistCombineReducers,
  createTransform,
} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import CryptoJS from 'crypto-js';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { LOGIN_REDUCER, LOADING_REDUCER } from './reducers/reducerTypes';
import combinedReducers from './reducers/combinedReducers';
import rootSaga from './sagas';
import config from './../../config';

const encrypt = createTransform(
  (inboundState, key) => {
    if (!inboundState) return inboundState;
    const cryptedText = CryptoJS.AES.encrypt(
      JSON.stringify(inboundState),
      config.STORE_ENCRYPT_SECRET,
    );

    return cryptedText.toString();
  },
  (outboundState, key) => {
    if (!outboundState) return outboundState;
    const bytes = CryptoJS.AES.decrypt(outboundState, config.STORE_ENCRYPT_SECRET);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    return JSON.parse(decrypted);
  },
);

const storeConfig = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: [LOGIN_REDUCER, LOADING_REDUCER],
  debug: true, //to get useful logging
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middleware.push(logger);
}

const reducers = persistCombineReducers(storeConfig, combinedReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers, transform: [encrypt] };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   log for the current status
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(rootSaga);

export default configureStore;
