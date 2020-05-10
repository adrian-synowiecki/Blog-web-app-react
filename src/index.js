import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore, { history } from 'redux/store';
import { ConnectedRouter } from 'connected-react-router';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import App from './App';
import GlobalStyles from './global-styles';
import { theme } from './utils/theme';

const { store, persistor } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<PersistGate persistor={persistor}>
				<GlobalStyles />
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);
