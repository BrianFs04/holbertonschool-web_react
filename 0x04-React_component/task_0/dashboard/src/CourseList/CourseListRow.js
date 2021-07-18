import React from 'react';
import PropTypes from 'prop-types';

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	let tr;

	isHeader
		? !textSecondCell
			? (tr = (
					<tr>
						<th colSpan={2}>{textFirstCell}</th>
					</tr>
			  ))
			: (tr = (
					<tr>
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
