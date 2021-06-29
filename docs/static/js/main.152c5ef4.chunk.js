(this.webpackJsonptask_4 = this.webpackJsonptask_4 || []).push([
	[0],
	{
		10: function (e, t, o) {},
		11: function (e, t, o) {
			o.r(t);
			var n = o(1),
				s = o.n(n),
				c = o(3),
				r = o.n(c),
				i = (o(8), o(0));
			var l = function () {
					return Object(i.jsxs)(i.Fragment, {
						children: [
							Object(i.jsxs)('header', {
								className: 'App-header',
								children: [
									Object(i.jsx)('img', {
										width: '150px',
										height: '150px',
										src: './holberton-logo.jpg',
										alt: 'logo',
									}),
									Object(i.jsx)('h1', {
										children: 'School dashboard',
									}),
								],
							}),
							Object(i.jsxs)('main', {
								className: 'App-body',
								children: [
									Object(i.jsx)('p', {
										children:
											'Login to access the full dashboard',
									}),
									Object(i.jsxs)('label', {
										children: [
											'Email:',
											Object(i.jsx)('input', {
												type: 'email',
											}),
										],
									}),
									Object(i.jsxs)('label', {
										children: [
											'Password:',
											Object(i.jsx)('input', {
												type: 'password',
											}),
										],
									}),
									Object(i.jsx)('button', {
										type: 'button',
										children: 'OK',
									}),
								],
							}),
							Object(i.jsx)('footer', {
								className: 'App-footer',
								children: Object(i.jsxs)('p', {
									children: [
										'Copyright ',
										new Date().getFullYear(),
										' - ',
										((e = !0),
										e
											? 'Holberton School'
											: 'Holberton School main dashboard'),
									],
								}),
							}),
						],
					});
					var e;
				},
				a =
					(o(10),
					function () {
						return Object(i.jsxs)('div', {
							className: 'Notifications',
							children: [
								Object(i.jsx)('p', {
									children:
										'Here is the list of notifications',
								}),
								Object(i.jsxs)('ul', {
									children: [
										Object(i.jsx)('li', {
											'data-priority': 'default',
											children: 'New course available',
										}),
										Object(i.jsx)('li', {
											'data-priority': 'urgent',
											children: 'New resume available',
										}),
										Object(i.jsx)('li', {
											'data-priority': 'urgent',
											dangerouslySetInnerHTML: {
												__html: ''.concat(
													'<strong>Urgent requirement</strong> - complete by EOD'
												),
											},
										}),
									],
								}),
								Object(i.jsx)('button', {
									type: 'button',
									style: {
										position: 'absolute',
										top: '11px',
										right: '10px',
										background: 'none',
										border: 'none',
										cursor: 'pointer',
									},
									'aria-label': 'Close',
									onClick: function () {
										return console.log(
											'Close button has been clicked'
										);
									},
									children: Object(i.jsx)('img', {
										width: '9px',
										src: './close-icon.png',
										alt: 'Close icon',
									}),
								}),
							],
						});
					});
			r.a.render(
				Object(i.jsxs)(s.a.StrictMode, {
					children: [
						Object(i.jsx)('div', {
							id: 'root-notifications',
							children: Object(i.jsx)(a, {}),
						}),
						Object(i.jsx)(l, {}),
					],
				}),
				document.getElementById('root')
			);
		},
		8: function (e, t, o) {},
	},
	[[11, 1, 2]],
]);
//# sourceMappingURL=main.152c5ef4.chunk.js.map
