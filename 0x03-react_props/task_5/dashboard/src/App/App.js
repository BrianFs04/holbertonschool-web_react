import React from 'react';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import './App.css';

function App({ isLoggedIn }) {
	const listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];

	const listNotifications = [
		{ id: 1, value: 'New course available', type: 'default' },
		{ id: 2, value: 'New resume available', type: 'urgent' },
		{
			id: 3,
			html: {
				__html: `${getLatestNotification()}`,
			},
			type: 'urgent',
		},
	];

	const isLogged = isLoggedIn ? (
		<CourseList listCourses={listCourses} />
	) : (
		<Login />
	);
	return (
		<>
			<Notifications listNotifications={listNotifications} />
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
