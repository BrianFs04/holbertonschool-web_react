import React from 'react';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

const Notifications = () => {
	return (
		<div className='Notifications'>
			<p>Here is the list of notifications</p>
			<ul>
				<li data-priority='default'>New course available</li>
				<li data-priority='urgent'>New resume available</li>
				<li
					data-priority='urgent'
					dangerouslySetInnerHTML={{
						__html: `${getLatestNotification()}`,
					}}
				></li>
			</ul>
			<button
				type='button'
				style={{
					position: 'absolute',
					top: '11px',
					right: '10px',
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
};

export default Notifications;
