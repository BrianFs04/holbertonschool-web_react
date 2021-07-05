import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<NotificationItem />);

it('test that NotificationItem renders without crashing', () => {
	shallow(<NotificationItem />);
});

it('renders the correct html for type and value props', () => {
	const wrapper = shallow(<NotificationItem type='default' value='test' />);
	const li = wrapper.find('li');
	expect(li.exists()).equal(true);
	expect(li.text()).equal('test');
	expect(li.prop('data-notification-type')).equal('default');
});

it('renders the correct html for html prop', () => {
	const text = 'Here is the list of notifications';
	const wrapper = shallow(
		<NotificationItem html={{ __html: '<u>test</u>' }} />
	);
	const li = wrapper.find('li');
	expect(li.exists()).equal(true);
	expect(li.html()).equal('<li><u>test</u></li>');
});
