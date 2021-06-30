import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

const wrapper = shallow(<Notifications />);

it('test that Notifications renders without crashing', () => {
	shallow(<Notifications />);
});

it('verify that Notifications renders three list items', () => {
	expect(wrapper.find('ul').children().length).equal(3);
});

it('verify that Notifications renders the text Here is the list of notifications', () => {
	expect(wrapper.find('p').text()).equal('Here is the list of notifications');
});
