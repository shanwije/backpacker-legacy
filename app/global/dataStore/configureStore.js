import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import combinedReducers from './reducers/combinedReducers';
import rootSaga from './sagas';

const config = {
  key: 'root',
  storage: AsyncStorage,
  blacklist: ['loadingReducer'],
  debug: true, //to get useful logging
};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  const logger = createLogger();
  middleware.push(logger);
}

const reducers = persistCombineReducers(config, combinedReducers);
const enhancers = [applyMiddleware(...middleware)];
// const initialState = {};
const persistConfig = { enhancers };
const store = createStore(reducers, undefined, compose(...enhancers));
const persistor = persistStore(store, persistConfig, () => {
  //   log for the current status
});
const configureStore = () => {
  return { persistor, store };
};

sagaMiddleware.run(rootSaga);

export default configureStore;
