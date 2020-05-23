import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from 'redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import GlobalStyles from './global-styles';

const { store, persistor } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<PersistGate persistor={persistor}>
				<GlobalStyles />
					<App />
			</PersistGate>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
