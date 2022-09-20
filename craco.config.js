const cracoAlias = require('craco-alias');

module.exports = {
	plugins: [
		{
			options: {
				baseUrl: '.',
				source: 'jsconfig',
			},
			plugin: cracoAlias,
		},
	],
};
