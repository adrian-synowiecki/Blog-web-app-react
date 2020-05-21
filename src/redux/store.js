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

const persistConfig = {
	key: 'root',
	storage,
	blacklist: [ 'article', 'profile', 'articleList', 'comments' ]
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
