import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';
import configureStore from './redux/store';
import { theme } from './utils/theme';

import createHistory from 'history/createBrowserHistory';
const history = createHistory();

const { persistor, store } = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<PersistGate persistor={persistor}>
				<ThemeProvider theme={theme}>
					<App />
				</ThemeProvider>
			</PersistGate>
		</Router>
	</Provider>,
	document.getElementById('root')
);

export { history };
