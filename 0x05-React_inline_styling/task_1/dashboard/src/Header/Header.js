import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import { StyleSheet, css } from 'aphrodite';

const Header = () => {
	return (
		<>
			<header className={css(styles.appHeader)}>
				<img
					className={css(styles.logoStyle)}
					src={logo}
					alt='logo'
				></img>
				<h1>School dashboard</h1>
			</header>
		</>
	);
};

const styles = StyleSheet.create({
	appHeader: {
		display: 'flex',
		alignItems: 'center',
		backgroundColor: 'white',
		color: '#ce314b',
		borderBottom: '3px solid #ce314b',
		width: '100%',
	},

	logoStyle: {
		width: '150px',
		height: '150px',
	},
});

export default Header;
