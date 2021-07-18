import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';

describe('With CourseList Empty', () => {
	const wrapper = shallow(<CourseList />);

	it('Verifies rendering without crashing', () => {
		shallow(<CourseList />);
	});

	it('Third row', () => {
		expect(wrapper.find('CourseListRow').at(2).html()).equal(
			'<tr><td>No course available yet</td><td></td></tr>'
		);
	});
});

describe('With CourseList containing elements', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<CourseList
				listCourses={[
					{ id: 1, name: 'ES6', credit: 60 },
					{ id: 2, name: 'Webpack', credit: 20 },
					{ id: 3, name: 'React', credit: 40 },
				]}
			/>
		);
	});

	it('First row', () => {
		expect(wrapper.find('CourseListRow').first().html()).equal(
			'<tr><th colSpan="2">Available courses</th></tr>'
		);
	});

	it('Second row', () => {
		expect(wrapper.find('CourseListRow').at(1).html()).equal(
			'<tr><th>Course name</th><th>Credit</th></tr>'
		);
	});

	it('Third row', () => {
		expect(wrapper.find('CourseListRow').at(2).html()).equal(
			'<tr><td>ES6</td><td>60</td></tr>'
		);
	});

	it('Fourth row', () => {
		expect(wrapper.find('CourseListRow').at(3).html()).equal(
			'<tr><td>Webpack</td><td>20</td></tr>'
		);
	});

	it('Fifth row', () => {
		expect(wrapper.find('CourseListRow').at(4).html()).equal(
			'<tr><td>React</td><td>40</td></tr>'
		);
	});
});
