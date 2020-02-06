import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FilmList from './FilmList';
import Film from './Film';

/*
 * The Films container
*/
const Films = () => {
	return (
		<Switch>
			<Route exact path={'/films'} component={FilmList} />
			<Route exact path={'/films/:id'} component={Film} />
		</Switch>
	);
};

export default Films;