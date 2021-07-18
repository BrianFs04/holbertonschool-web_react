import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
	const showNotifications = displayDrawer && (
		<div className='Notifications'>
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
			<div className='menuItem'>Your notifications</div>
			{showNotifications}
		</>
	);
};

Notifications.defaultProps = {
	displayDrawer: false,
	listNotifications: [],
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
	listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

export default Notifications;
