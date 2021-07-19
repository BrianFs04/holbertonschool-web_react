import React from 'react';
import { shallow } from 'enzyme';
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
		expect(wrapper.find('p').text()).toEqual(
			'Here is the list of notifications'
		);
	});

	it('Renders it correctly and with the right number of NotificationItem', () => {
		expect(wrapper.find('NotificationItem').length).toEqual(3);
		expect(wrapper.find('NotificationItem').first().html()).toEqual(
			'<li data-notification-type="default">New course available</li>'
		);
		expect(wrapper.find('NotificationItem').at(1).html()).toEqual(
			'<li data-notification-type="urgent">New resume available</li>'
		);
		expect(wrapper.find('NotificationItem').at(2).html()).toEqual(
			`<li data-notification-type="urgent">${getLatestNotification()}</li>`
		);
	});

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div.menuItem').exists()).toEqual(true);
	});

	it('Check that div.Notifications is being displayed', () => {
		expect(wrapper.find('div.Notifications').exists()).toEqual(true);
	});
});

describe('when displayDrawer is false', () => {
	const wrapper = shallow(<Notifications />);

	it('Check that the menu item is being displayed', () => {
		expect(wrapper.find('div.menuItem').exists()).toEqual(true);
	});

	it('Check that div.Notifications is not being displayed', () => {
		expect(wrapper.find('div.Notifications').exists()).toEqual(false);
	});
});

describe('when listNotifications is empty', () => {
	const wrapper = shallow(
		<Notifications displayDrawer={true} listNotifications={[]} />
	);

	it('Renders correclty', () => {
		const notificationItem = wrapper.find('NotificationItem');
		expect(notificationItem.exists()).toEqual(false);
		expect(notificationItem.length).toEqual(0);
	});

	it('No new notification for now is displayed instead of Here is the list of notifications', () => {
		expect(wrapper.find('p').text()).toEqual('No notifications for now');
	});
});

describe('MarkAsRead', () => {
	const wrapper = shallow(<Notifications displayDrawer />);
	it('mockup the console.log', () => {
		console.log = jest.fn();
		const instance = wrapper.instance();
		const id = 0;
		instance.markAsRead(id);
		expect(console.log).toHaveBeenCalledWith(
			`Notification ${id} has been marked as read`
		);
		jest.restoreAllMocks();
	});
});
