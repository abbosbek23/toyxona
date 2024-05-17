// import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Routes } from './routes';
import { BrowserRouter } from 'react-router-dom';
// import { AuthContextProvider } from './modules/auth/context';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Routes />
	</BrowserRouter>
);
