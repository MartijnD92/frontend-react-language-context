import React from 'react';
import { LanguageContextProvider } from './context/LanguageContext';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<Router>
			<LanguageContextProvider>
				<App />
			</LanguageContextProvider>
		</Router>
	</React.StrictMode>,
	document.getElementById('root')
);
