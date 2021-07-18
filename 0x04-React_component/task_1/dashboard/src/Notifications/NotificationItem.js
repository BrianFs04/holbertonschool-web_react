import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, html, value }) => {
	return (
		<>
			<li data-notification-type={type} dangerouslySetInnerHTML={html}>
				{value}
			</li>
		</>
	);
};

NotificationItem.defaultProps = {
	type: 'default',
};

NotificationItem.propTypes = {
	html: PropTypes.shape({ _html: PropTypes.string }),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
};

export default NotificationItem;
