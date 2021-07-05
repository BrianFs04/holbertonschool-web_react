import React from 'react';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import './App.css';

function App({ isLoggedIn }) {
	const isLogged = isLoggedIn ? <CourseList /> : <Login />;
	return (
		<>
			<Notifications />
			<div className='App'>
				<Header />
				{isLogged}
				<Footer />
			</div>
		</>
	);
}

App.defaultProps = {
	isLoggedIn: false,
};

export default App;
