const options = {
	'watch': false,
	'ignore_watch': [
		'node_modules',
		'.next',
		'.data',
		'.git',
		'workspaces/api/node_modules',
		'*.data*',
		'workspaces/api/.data-test/*',
		'workspaces/bot/node_modules'
	],
	// 'watch_options': {
	// 	'followSymlinks': false
	// }
}

const basePort = process.env.PORT || 3050

module.exports = {
	apps: [
		{
			name: `app-${basePort}`,
			script: 'bun',
			env: { NODE_ENV: 'development' },
			args: 'run dev',
			...options//
		},
		// {
		// 	name: 'xcard.api',
		// 	script: 'bun',
		// 	args: 'dev',
		// 	cwd: 'workspaces/api',
		// 	env: { PORT: 3011 },
		// 	...dev_options
		// }
	]
}