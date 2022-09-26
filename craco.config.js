const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
	plugins: [
		{
			options: {
				baseUrl: '.',
				source: 'jsconfig',
			},
			plugin: CracoAliasPlugin,
		},
	],
};
