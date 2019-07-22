import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import Root from './routes';

render(
	<Provider store={store}>
		<Root />
	</Provider>,
	document.getElementById('root')
);
