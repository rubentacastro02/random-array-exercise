// See http://brunch.io for documentation.
const files = {
	javascripts: {
		joinTo: {
			'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
			'app.js': /^app/,
		}
	},
	stylesheets: {joinTo: 'app.css'}
};

const plugins = {
	babel: {presets: ['latest']}
};

/*const eslint = {
	config: {
		rules: {semi: 'never'},
	},
	pattern: /^src\/.*\.jsx?$/,
	warnOnly: false,
	formatter: 'table',
};*/

module.exports = {
	files,
	plugins,
	//eslint,
};
