import React from 'react';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	componentDidMount() {
		window.addEventListener('keydown', this.handleLogout);
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.handleLogout);
	}

	handleLogout(e) {
		if (e.ctrlKey && e.key === 'h') {
			e.preventDefault();
			return alert('Logging you out');
			this.props.logOut();
		}
	}

	render() {
		const { isLoggedIn } = this.props;
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
			<BodySectionWithMarginBottom title={'Course list'}>
				<CourseList listCourses={listCourses} />
			</BodySectionWithMarginBottom>
		) : (
			<BodySectionWithMarginBottom title={'Log in to continue'}>
				<Login />
			</BodySectionWithMarginBottom>
		);
		return (
			<>
				<Notifications listNotifications={listNotifications} />
				<div className={css(styles.font)}>
					<Header />
					<div className={css(styles.bodySection)}>
						{isLogged}
						<BodySection title={'News from the School'}>
							<p>Enjoy the silence</p>
						</BodySection>
					</div>
					<div className={css(styles.appFooter)}>
						<Footer />
					</div>
				</div>
			</>
		);
	}
}

const styles = StyleSheet.create({
	font: {
		fontFamily: 'sans-serif',
	},

	bodySection: {
		paddingLeft: '20px',
	},

	appFooter: {
		position: 'absolute',
		textAlign: 'center',
		fontStyle: 'italic',
		borderTop: '3px solid #ce314b',
		bottom: '0',
		height: '50px',
		minWidth: '98.7%',
	},
});

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => null,
};

App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
