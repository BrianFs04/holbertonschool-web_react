import accessImmutableObject from './2-nested';

console.log(
	accessImmutableObject(
		{
			name: {
				first: 'Guillaume',
				last: 'Salva',
			},
			last: 'sx',
		},
		['name', 'first']
	)
);
