import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Favourites from '../favo/Favourites';
import Profile from '../profile/Profile';
import { Consumer } from '../../context/Global';
import './Sidebar.css';

const Sidebar = () => {
	return (
		<Consumer>
			{({categories, counters, films}) => {
				const index = categories.findIndex(x => x.id === 'films');
				categories[index] = {...categories[index], count: films.length};
				return <Grid className='sidebar-panel' item xs={2} sm={4}>
					<div>
						<Profile />
						<Favourites counters={counters}/>
						<nav className="sidebar-nav">
							<ul>
								{categories.map(({ id, title, count }) => (
									<li key={id}>
										<Link to={`/${id}`}>
											<span className="sidebar-nav-item-text">{title}</span>
											{count > 0 ?
												<span className="sidebar-nav-item-count">
													{count}
												</span>
												: null
											}
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</Grid>;
			}
			}
		</Consumer>
	);
};

export default Sidebar;
