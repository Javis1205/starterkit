import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const persistConfig = {
    key: 'root',
    storage,
};
const middlewares = [thunk];
const persistedReducer = persistReducer(persistConfig, reducers);

if (__DEV__) {
  middlewares.push(logger);
}

const store = createStore(persistedReducer, applyMiddleware(...middlewares));
const persistor = persistStore(store);
    
export {
    store,
    persistor
}
;
