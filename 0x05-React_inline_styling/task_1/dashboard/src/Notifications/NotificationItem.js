import React from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		return (
			<>
				<li
					data-notification-type={type}
					dangerouslySetInnerHTML={html}
					onClick={() => markAsRead(id)}
				>
					{value}
				</li>
			</>
		);
	}
}

NotificationItem.defaultProps = {
	type: 'default',
	markAsRead: () => {},
	id: NaN,
};

NotificationItem.propTypes = {
	html: PropTypes.shape({ _html: PropTypes.string }),
	type: PropTypes.string.isRequired,
	value: PropTypes.string,
	markAsRead: PropTypes.func,
	id: PropTypes.number,
};

export default NotificationItem;
