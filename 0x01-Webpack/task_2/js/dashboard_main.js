import $ from 'jquery';
import _ from 'lodash';
import '../css/main.css';

$(() => {
	let count = 0;
	const updateCounter = () => {
		count += 1;
		$('#count').text(`${count} clicks on the button`);
	};

	$('body').prepend(
		$('<div>').attr({ id: 'logo' }),
		$('<p>').text('Holberton Dashboard'),
		$('<p>').text('Dashboard data for the students'),
		$('<button>')
			.text('Click here to get started')
			.on(
				'click',
				_.debounce(updateCounter, 300, {
					leading: true,
					trailing: false,
				})
			),
		$('<p>').attr({ id: 'count' }),
		$('<p>').text('Coyright - Holberton School')
	);
});
