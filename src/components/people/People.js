import React, { useEffect, useState } from 'react';
import './People.css';

/*
 * The People component
*/
const People = (props) => {
	const [people, setPeople] = useState({});
	const getPeople = (url) => {
		fetch(url)
			.then(response => response.json())
			.then(responseJson => {
				setPeople(responseJson);
			})
			.catch();
	};

	useEffect(() => {
		getPeople(props.url);
	}, []);

	const getRandomAvatar = () => {
		return 'https://i.pravatar.cc/150?img=' + Math.floor(Math.random() * Math.floor(70));
	};

	return (
		<div className="people-card">
			<img className="people-card-avatar" src={getRandomAvatar()} alt={'Character picture'}/>
			<div className="people-name">{people.name}</div>
			<div className="person-body-info">
				<div>Height: {people.height} cm</div>
				<div>Mass: {people.mass} kg</div>
				<div>Eye color: {people.eye_color}</div>
			</div>
		</div>
	);
};

export default People;