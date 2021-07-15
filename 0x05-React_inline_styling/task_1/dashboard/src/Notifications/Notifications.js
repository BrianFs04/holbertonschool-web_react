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
		return (
			<>
				<div className={css(styles.menuItem)} id='menuItem'>
					Your notifications
				</div>
				{showNotifications}
			</>
		);
	}
}

const styles = StyleSheet.create({
	notifications: {
		border: '1px dashed #ce314b',
		padding: '5px',
		height: '100px',
		position: 'absolute',
		right: '10px',
		top: '35px',
		width: '410px',
		':nth-child(1n) > p': {
			marginTop: '4px',
		},
	},

	menuItem: {
		float: 'right',
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
