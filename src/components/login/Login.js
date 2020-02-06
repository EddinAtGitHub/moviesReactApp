import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Redirect} from 'react-router-dom';
import './Login.css';

const styles = {
	avatar: {
		backgroundColor: '#2699FB'
	},
	form: {
		width: '100%' // Fix IE 11 issue.
	},
	submit: {
		backgroundColor: '#7fc4fd'
	}
};

/*
 * The Login component
*/
const Login = () => {
	const [authUser, setAuthUser] = useState(null);
	const [isAuth, setIsAuth] = useState(false);

	const onSubmit = () => {
		setAuthUser({name: 'demo'});
		setIsAuth(true);
	};

	if (isAuth) {
		localStorage.setItem('user', JSON.stringify(authUser));
		return <Redirect to="/films"/>;
	}

	return (
		<div className="login-panel">
			<div className="login-body-panel">
				<LockOutlinedIcon/>
				<h1>
						The SWAPI App
				</h1>
				<form style={styles.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
					/>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
					/>
				</form>
				<Button
					type="submit"
					fullWidth
					variant="contained"
					color="primary"
					style={styles.submit}
					onClick={onSubmit}
				>
						Sign In
				</Button>
			</div>
		</div>
	);
};

export default Login;