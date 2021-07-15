import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const Login = () => {
	return (
		<>
			<main className={css(styles.appBody)}>
				<p>Login to access the full dashboard</p>
				<label>
					Email:
					<input type='email'></input>
				</label>
				<label>
					Password:
					<input type='password'></input>
				</label>
				<button type='button'>OK</button>
			</main>
		</>
	);
};

const styles = StyleSheet.create({
	appBody: {
		padding: '16px 14px',
		':nth-child(1n) > label': {
			paddingRight: '10px',
		},
		':nth-child(1n) > label input': {
			marginLeft: '10px',
		},
		'nth-child(1n) > button': {
			borderRadius: '5px',
			background: 'none',
			cursor: 'pointer',
		},
	},
});

export default Login;
