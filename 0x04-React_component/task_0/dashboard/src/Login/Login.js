import React from 'react';
import './Login.css';

const Login = () => {
	return (
		<>
			<main className='App-body'>
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

export default Login;
