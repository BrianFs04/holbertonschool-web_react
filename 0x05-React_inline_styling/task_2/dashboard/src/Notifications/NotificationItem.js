import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
	constructor(props) {
		super(props);
	}

	render() {
		const { type, html, value, markAsRead, id } = this.props;
		const charColor = css(
			type === 'default' ? styles.default : styles.urgent
		);
		return (
			<>
				<li
					className={charColor}
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

const styles = StyleSheet.create({
	default: {
		color: 'darkblue',
	},

	urgent: {
		color: 'red',
	},
});

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
