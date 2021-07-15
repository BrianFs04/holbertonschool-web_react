import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './Header.css';

const Header = () => {
	return (
		<>
			<header className='App-header'>
				<img width='150px' height='150px' src={logo} alt='logo'></img>
				<h1>School dashboard</h1>
			</header>
		</>
	);
};

export default Header;
