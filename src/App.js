import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';

import { store, persistor } from './store';

import history from './services/history';
import GlobalStyle from './styles/global';
import CustomRouter from './routes/CustomRouter';

function App() {
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor}>
				<CustomRouter history={history}>
					<Routes />
					<GlobalStyle />
					<ToastContainer autoClose={3000} theme="colored" />
				</CustomRouter>
			</PersistGate>
		</Provider>
	);
}

export default App;
