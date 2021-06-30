import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';

const wrapper = shallow(<App />);

it('test that App renders without crashing', () => {
	shallow(<App />);
});

it('verify that App renders a div with the class App-header', () => {
	expect(wrapper.find('header.App-header').exists()).equal(true);
});

it('verify that App renders a div with the class App-body', () => {
	expect(wrapper.find('main.App-body').exists()).equal(true);
});

it('verify that App renders a div with the class App-footer', () => {
	expect(wrapper.find('footer.App-footer').exists()).equal(true);
});
