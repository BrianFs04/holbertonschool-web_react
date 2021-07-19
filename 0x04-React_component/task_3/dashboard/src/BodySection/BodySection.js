import React from 'react';
import './BodySection.css';

class BodySection extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { children, title } = this.props;
		return (
			<div className='bodySection'>
				<h2>{title}</h2>
				{children}
			</div>
		);
	}
}

export default BodySection;
