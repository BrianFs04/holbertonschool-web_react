import React from 'react';
import { StyleSheet, css, minify } from 'aphrodite';

minify(false);

class BodySection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, title } = this.props;
		return (
			<div className={css(styles.bodySection)} id='bodySection'>
				<h2>{title}</h2>
				{children}
			</div>
		);
	}
}

const styles = StyleSheet.create({
	bodySection: {
		paddingLeft: '20px',
	},
});

export default BodySection;
