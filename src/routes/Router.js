import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Login from '../components/login/Login';
import Films from '../components/film/Films';
import Sidebar from '../components/layouts/Sidebar';
import { GlobalProvider } from '../context/Global';

const checkAuth = () => {
	const user = localStorage.getItem('user');
	return !(user === undefined || user === null);
};

const LinkToFilms = () => (
	<div>
		<div className="Grid-container">
			<Sidebar/>
			<Films />
		</div>
	</div>
);



/*
 * The Router
*/
const Router = () => {

	return (
		<GlobalProvider>
			<BrowserRouter basepath={process.env.PUBLIC_URL}>
				<div>
					<Switch>
						<Route path="/" exact
							render={() => checkAuth() ? <Redirect to="/films"/> : <Redirect to="/login"/>}
						/>
						<Route path="/login"
							render={() => checkAuth() ? <Redirect to="/films"/> : <Login />}
						/>
						<Route path={['/films', '/films/:id']}
							render={() => checkAuth() ? LinkToFilms() : <Redirect to="/login"/>}
						/>
					</Switch>
				</div>
			</BrowserRouter>
		</GlobalProvider>
	);
};

export default Router;