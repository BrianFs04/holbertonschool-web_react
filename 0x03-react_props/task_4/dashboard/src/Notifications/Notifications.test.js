import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';

describe('When displayDrawer is true', () => {
	const wrapper = shallow(<Notifications displayDrawer={true} />);

	it('test that Notifications renders without crashing', () => {
		shallow(<Notifications />);
	});

	it('verify that Notifications renders three list items', () => {
		expect(wrapper.find('ul').children().length).equal(3);
	});

	it('verify that Notifications renders the text Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).equal(
			'Here is the list of notifications'
		);
	});

	it('NotificationItem with props', () => {
		expect(wrapper.find('NotificationItem').first().html()).to.equal(
			'<li data-notification-type="default">New course available</li>'
		);
	});

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div.menuItem').exists()).equal(true);
	});

	it('Check that div.Notifications is being displayed', () => {
		expect(wrapper.find('div.Notifications').exists()).equal(true);
	});
});

describe('when displayDrawer is false', () => {
	const wrapper = shallow(<Notifications />);

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div.menuItem').exists()).equal(true);
	});

	it('Check that div.Notifications is not being displayed', () => {
		expect(wrapper.find('div.Notifications').exists()).equal(false);
	});
});
