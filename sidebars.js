module.exports = {
	docs: [
		{
			type: 'link',
			label: 'Home',
			href: '/',
		},
		{
			type: 'category',
			label: 'Introduction',
			items: ['introduction/index-introduction'],
		},
		{
			type: 'category',
			label: 'User manual',
			items: ['user-manual/index-user-manual'],
		},
		{
			type: 'category',
			label: 'Reference manual',
			items: [
				'reference-manual/index-reference-manual',
				{
					type: 'category',
					label: 'String operators',
					items: [
						'reference-manual/string-operators/index-string-operators',
						'reference-manual/string-operators/index-string-concatenation',
					],
				},
			],
		},
		{
			type: 'category',
			label: 'EBNF',
			items: ['ebnf/index-ebnf'],
		},
	],
};
