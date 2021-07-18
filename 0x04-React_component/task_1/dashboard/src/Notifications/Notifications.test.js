import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('When displayDrawer is true and listNotifications contains elements', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(
			<Notifications
				displayDrawer={true}
				listNotifications={[
					{ id: 1, type: 'default', value: 'New course available' },
					{ id: 2, type: 'urgent', value: 'New resume available' },
					{
						id: 3,
						type: 'urgent',
						html: { __html: getLatestNotification() },
					},
				]}
			/>
		);
	});

	it('test that Notifications renders without crashing', () => {
		shallow(<Notifications />);
	});

	it('verify that Notifications renders the text Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).equal(
			'Here is the list of notifications'
		);
	});

	it('Renders it correctly and with the right number of NotificationItem', () => {
		expect(wrapper.find('NotificationItem').length).equal(3);
		expect(wrapper.find('NotificationItem').first().html()).equal(
			'<li data-notification-type="default">New course available</li>'
		);
		expect(wrapper.find('NotificationItem').at(1).html()).equal(
			'<li data-notification-type="urgent">New resume available</li>'
		);
		expect(wrapper.find('NotificationItem').at(2).html()).equal(
			`<li data-notification-type="urgent">${getLatestNotification()}</li>`
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

describe('when listNotifications is empty', () => {
	const wrapper = shallow(
		<Notifications displayDrawer={true} listNotifications={[]} />
	);

	it('Renders correclty', () => {
		const notificationItem = wrapper.find('NotificationItem');
		expect(notificationItem.exists()).equal(false);
		expect(notificationItem.length).equal(0);
	});

	it('No new notification for now is displayed instead of Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).equal('No notifications for now');
	});
});
