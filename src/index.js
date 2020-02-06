import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes/Router';
import './index.css';
import './App.css';

const App = () => (
	<Router/>
);

ReactDOM.render(
	<App/>,
	document.getElementById('app-root')
);