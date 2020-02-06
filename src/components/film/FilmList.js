import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box } from '@material-ui/core';
import { Consumer } from '../../context/Global';

const FilmList = () => {
	return (
		<Grid item xs={10} sm={8}>
			<div className="film-list-panel">
				<div className="film-list-swapi">
					<Box p={2} fontSize="h5.fontSize" display="flex" justifyContent="center">THE SWAPI</Box>
				</div>
				<div>
					<Box p={2} fontSize="h5.fontSize" display="flex" justifyContent="center">Films</Box>
				</div>
				<Consumer>
					{ ({films}) => <div >
						{films.map(film => {
							const arr = film.url.split('/');
							const filmId = arr[arr.length - 2];
							return <Box className="film-card" key={film.episode_id}>
								<div>
									<p>{film.director}</p>
									<Link to={`/films/${filmId}`}>{film.title}</Link>
									<p>
										{film.opening_crawl}
									</p>
								</div>
							</Box>;
						})}
					</div>
					}
				</Consumer>
			</div>
		</Grid>
	);
};
export default FilmList;