import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { Consumer } from '../../context/Global';
import { lime } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
/*
 * Film info
*/
const FilmInfo = (props) => {
	const film = props.film;
	const [displayThumbUpIcon, setdisplayThumbUpIcon] = useState(true);

	return (
		<Consumer>
			{({addToFavo}) => (<Grid style={{padding: '10px'}} container>
				<Grid item xs={6}>
					<div>
						<b>Director: </b>{film.director}
					</div>
					<div>
						<b>Release date: </b>{film.release_date}
					</div>
					<div>
						<b>Producer: </b>{film.producer}
					</div>
				</Grid>
				<Grid item xs={6}>
					<Box display="flex" justifyContent="flex-end" m={1} p={1}>
						<IconButton onClick={() => {
							if (displayThumbUpIcon) {
								setdisplayThumbUpIcon(false);
								addToFavo(film);
							}
						}} >
							{displayThumbUpIcon ? <ThumbUpIcon /> : <ThumbUpIcon style={{color: lime[300]}}/>}
						</IconButton>
					</Box>
				</Grid>
				<br/>
				<div>
					{film.opening_crawl}
				</div>
			</Grid>)
			}
		</Consumer>
	);
};
export default FilmInfo;