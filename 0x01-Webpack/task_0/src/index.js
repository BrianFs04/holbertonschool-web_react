import $ from 'jquery';

$(function () {
	$('body').prepend(
		$('<p>').text('Holberton Dashboard'),
		$('<p>').text('Dashboard data for the students'),
		$('<p>').text('Copyright - Holberton School')
	);
});
