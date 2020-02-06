import React from 'react';
import './Profile.css';

/*
 * The Profile component
*/
const Profile = () => {
	return (
		<div className="profile-panel">
			<div className="user-panel">
				<img className="user-picture" src="https://i.pravatar.cc/150?img=3"/>
				<div className="user-name">John Doe</div>
				<div className="user-city">San Francisco, CA</div>
			</div>
		</div>
	);
};

export default Profile;
