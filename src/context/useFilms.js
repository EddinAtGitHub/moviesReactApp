import { useEffect, useState } from 'react';

export const useFilms = (filmId) => {
	const [films, setFilms] = useState([]);
	const [film, setFilm] = useState({});

	const getFilms = () => {
		fetch('https://swapi.co/api/films/')
			.then(response => response.json())
			.then(responseJson => {
				setFilms(responseJson.results);
			})
			.catch();
	};

	const getFilm = (filmId) => {
		fetch('https://swapi.co/api/films/' + filmId)
			.then(response => response.json())
			.then(responseJson => {
				setFilm(responseJson);
			})
			.catch();
	};

	useEffect(() => {
		(filmId) ? getFilm(filmId) : getFilms();
	}, []);

	if (filmId) {
		return film;
	}

	return films;
};