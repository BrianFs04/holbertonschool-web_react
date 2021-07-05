import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import CourseList from './CourseList';

const wrapper = shallow(<CourseList />);

it('Verifies rendering without crashing', () => {
	shallow(<CourseList />);
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
