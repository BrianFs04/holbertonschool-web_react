import React from 'react';
import PropTypes from 'prop-types';
import './CourseList.css';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	let tr;

	const headerBgColor = { backgroundColor: '#deb5b545' };
	const rowBgColor = { backgroundColor: '#f5f5f5ab' };

	isHeader
		? !textSecondCell
			? (tr = (
					<tr>
						<th colSpan={2} style={headerBgColor}>
							{textFirstCell}
						</th>
					</tr>
			  ))
			: (tr = (
					<tr style={rowBgColor}>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</tr>
			  ))
		: (tr = (
				<tr>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</tr>
		  ));

	return tr;
};

CourseListRow.defaultProps = {
	isHeader: false,
	textSecondCell: null,
};

CourseListRow.propTypes = {
	isHeader: PropTypes.bool,
	textFirstCell: PropTypes.string.isRequired,
	textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default CourseListRow;
