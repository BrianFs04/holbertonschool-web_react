import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);

it('test that App renders without crashing', () => {
	shallow(<App />);
});

it('It should contain the Notifications component', () => {
	expect(wrapper.find('Notifications').exists()).equal(true);
});

it('It should contain the Header component', () => {
	expect(wrapper.find('Header').exists()).equal(true);
});

it('It should contain the Login component', () => {
	expect(wrapper.find('Login').exists()).equal(true);
});

it('It should contain the Footer component', () => {
	expect(wrapper.find('Footer').exists()).equal(true);
});

it('CourseList not displayed - when is not logged in', () => {
	expect(wrapper.find('CourseList').exists()).equal(false);
});

it('When is logged in', () => {
	const wrapper = shallow(<App isLoggedIn={true} />);
	expect(wrapper.find('Login').exists()).equal(false);
	expect(wrapper.find('CourseList').exists()).equal(true);
});
