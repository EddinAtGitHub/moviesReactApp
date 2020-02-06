import React from 'react';
import './Favourites.css';
const Favourites = ({counters}) => (
	<div className="favo-panel">
		<div className="favo-title">
                My Favourites
		</div>
		<div
			className="favo-items"
		>
			{counters.map(favoItem => (
				<div className="favo-item-container" key={favoItem.id} >
					<div className="favo-item-value">{favoItem.value}</div>
					<div className="favo-item-name">{favoItem.name}</div>
				</div>
			))}
		</div>
	</div>
);

export default Favourites;