const { CracoAliasPlugin } = require('react-app-alias');

module.exports = {
	plugins: [
		{
			options: {
				baseUrl: './src',
				source: 'jsconfig',
			},
			plugin: CracoAliasPlugin,
		},
	],
};
