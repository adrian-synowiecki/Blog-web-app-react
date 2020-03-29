/* import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer'
import rootSaga from './root-saga'


const persistConfig = {
  key: 'root',
  storage,
}

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);

export default () => {
  return { store, persistor: persistStore(store) };
};
 */

// configureStore.js

import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import rootReducer from './root-reducer';

export const history = createBrowserHistory();

/* 
const middlewares = [
  routerMiddleware(history), 
  thunkMiddleware,
  createLogger({
    predicate: () => process.env.NODE_ENV === 'development',
    collapsed: true,
  }),
];

 */

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'router' ]
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function configureStore(preloadedState) {
	const store = createStore(
		persistedReducer,
		preloadedState,
		composeWithDevTools(applyMiddleware(routerMiddleware(history), sagaMiddleware))
	);
	const persistor = persistStore(store);
	sagaMiddleware.run(rootSaga);
	return { store, persistor };
}
