import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

const CourseList = ({ listCourses }) => {
	return (
		/* Had to done the main tag because of css styles */
		<main className='tableMargin'>
			<table id='CourseList'>
				<thead>
					<CourseListRow
						textFirstCell='Available courses'
						isHeader={true}
					/>
					<CourseListRow
						textFirstCell='Course name'
						textSecondCell='Credit'
						isHeader={true}
					/>
				</thead>
				<tbody>
					{!listCourses.length ? (
						<CourseListRow
							textFirstCell='No course available yet'
							isHeader={false}
						/>
					) : (
						listCourses.map((eachCourse) => (
							<CourseListRow
								key={eachCourse.id}
								textFirstCell={eachCourse.name}
								textSecondCell={eachCourse.credit}
								isHeader={false}
							/>
						))
					)}
				</tbody>
			</table>
		</main>
	);
};

CourseList.defaultProps = {
	listCourses: [],
};

CourseList.propTypes = {
	listCourses: PropTypes.arrayOf(CourseShape),
};

export default CourseList;
