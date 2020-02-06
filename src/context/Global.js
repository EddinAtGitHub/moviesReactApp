import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { categories, counters } from '../store';
const { Provider, Consumer } = createContext(null);

/*
 * The Global context provider
*/
const GlobalProvider = (props) => {

	const [state, setState] = useState({
		categories: categories,
		counters: counters,
		films: []
	});

	const getFilms = () => {
		fetch('https://swapi.co/api/films/')
			.then(response => response.json())
			.then(responseJson => {
				setState({
					...state,
					films: responseJson.results
				});
			})
			.catch();
	};

	useEffect(() => {
		getFilms();
	}, []);

	const getContext = () => ({
		...state,
		addToFavo: () => {
			let _counters = [...state.counters];
			const index = _counters.findIndex(x => x.id === 'films');
			_counters[index].value++;
			setState({
				...state,
				counters: _counters
			});
		}
	});

	return (
		<Provider value={getContext()}>{props.children}</Provider>
	);
};
export { GlobalProvider, Consumer };
