import React from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

class Notifications extends React.Component {
	constructor(props) {
		super(props);
		this.markAsRead = this.markAsRead.bind(this);
	}

	markAsRead(id) {
		console.log(`Notification ${id} has been marked as read`);
	}

	shouldComponentUpdate(nextProps) {
		return (
			nextProps.listNotifications.length >
			this.props.listNotifications.length
		);
	}

	render() {
		const { displayDrawer, listNotifications } = this.props;
		const showNotifications = displayDrawer && (
			<div className={css(styles.notifications)} id='Notifications'>
				{!listNotifications.length ? (
					<p>No notifications for now</p>
				) : (
					<>
						<p>Here is the list of notifications</p>
						<ul>
							{listNotifications.length &&
								listNotifications.map((notification) => (
									<NotificationItem
										key={notification.id}
										type={notification.type}
										value={notification.value}
										html={notification.html}
										markAsRead={this.markAsRead}
										id={notification.id}
									/>
								))}
						</ul>
					</>
				)}

				<button
					type='button'
					style={{
						position: 'absolute',
						top: '2px',
						right: '2px',
						background: 'none',
						border: 'none',
						cursor: 'pointer',
					}}
					aria-label='Close'
					onClick={() => console.log('Close button has been clicked')}
				>
					<img width='9px' src={closeIcon} alt='Close icon'></img>
				</button>
			</div>
		);

		const show = css(
			displayDrawer ? styles.textDisappears : styles.textStays
		);

		return (
			<>
				<div className={show} id='menuItem'>
					Your notifications
				</div>
				{showNotifications}
			</>
		);
	}
}

const screenSizes = {
	medium: '@media screen and (max-width: 900px)',
};

const translateKeyframes = {
	'0%': {
		transform: 'translateY(0px)',
	},

	'50%': {
		transform: 'translateY(-5px)',
	},

	'100%': {
		transform: 'translateY(5px)',
	},
};

const opacityKeyframes = {
	from: {
		opacity: 0.5,
	},

	to: {
		opacity: 1,
	},
};

const styles = StyleSheet.create({
	notifications: {
		border: '1px dashed #ce314b',
		position: 'absolute',
		right: '10px',
		top: '35px',
		width: '410px',
		':nth-child(1n) > p': {
			marginTop: '4px',
		},
		[screenSizes.medium]: {
			width: '100%',
			border: 'none',
			backgroundColor: 'white',
			right: '0',
			top: '0',
			minHeight: '200%',
			':nth-child(1n) > p': {
				marginTop: '0',
				fontSize: '20px',
			},
		},
	},

	textStays: {
		float: 'right',
		backgroundColor: '#fff8f8',
		':hover': {
			cursor: 'pointer',
			animationName: [translateKeyframes, opacityKeyframes],
			animationDuration: '0.5s, 1s',
			animationIterationCount: '3',
		},
	},

	textDisappears: {
		display: 'none',
	},
});

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
