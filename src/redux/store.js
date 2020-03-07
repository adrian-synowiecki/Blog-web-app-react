import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
//import thunk from 'redux-thunk';

import rootReducer from './rootReducer'
import rootSaga from './sagas';


const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(persistedReducer, enhancer);

/* const composedEnhancers = composeWithDevTools(
  applyMiddleware(thunk),
); */

sagaMiddleware.run(rootSaga);

export default () => {
  return { store, persistor: persistStore(store) };
};

