import $ from 'jquery';
import _, { update } from 'lodash';

$(() => {
	let count = 0;
	const updateCounter = () => {
		count += 1;
		$('#count').text(`${count} clicks on the button`);
	};

	$('body').prepend(
		$('<p>').text('Holberton Dashboard'),
		$('<p>').text('Dashboard data for the students'),
		$('<button>')
			.text('Click here to get started')
			.on(
				'click',
				_.debounce(updateCounter, 500, {
					leading: true,
					trailing: false,
				})
			),
		$('<p>').attr({ id: 'count' }),
		$('<p>').text('Coyright - Holberton School')
	);
});
