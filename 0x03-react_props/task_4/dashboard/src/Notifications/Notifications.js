import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

const Notifications = ({ displayDrawer }) => {
	const showNotifications = displayDrawer && (
		<div className='Notifications'>
			<p>Here is the list of notifications</p>
			<ul>
				<NotificationItem type='default' value='New course available' />
				<NotificationItem type='urgent' value='New resume available' />
				<NotificationItem
					type='urgent'
					html={{
						__html: `${getLatestNotification()}`,
					}}
				/>
			</ul>
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
};

Notifications.propTypes = {
	displayDrawer: PropTypes.bool,
};

export default Notifications;
