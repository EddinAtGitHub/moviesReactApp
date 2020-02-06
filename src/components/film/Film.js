import React from 'react';
import { Grid, Box } from '@material-ui/core';
import People from '../people/People';
import FilmInfo from './FilmInfo';
import {useFilms} from '../../context/useFilms';
import './Film.css';

/*
 * The Film component
*/
const Film = (props) => {
	const film = useFilms(props.match.params.id);

	return (
		<Grid item xs={10} sm={8}>
			<div>
				<div className="film-title-panel">
					<Box boxShadow={1} p={2} fontSize="h6.fontSize" display="flex" justifyContent="right">
						{film.title}
					</Box>
				</div>
				<FilmInfo film={film} />
				<div className="people-list-panel">
					{film.characters ?
						film.characters.map(url => <People key={url} url={url}/>)
						: null}
				</div>
			</div>
		</Grid>
	);
};

export default Film;