const options = {
	'watch': false,
	'ignore_watch': [
		'node_modules',
		'.next',
		'.data',
		'.git',
		'apps/*/node_modules',
		'*.data*',
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
			cwd: 'apps/frontend-nextjs',
			args: 'run dev',
			...options//
		},
		// {
		// 	name: 'app',
		// 	script: 'bun',
		// 	args: 'dev',
		// 	cwd: 'apps/backend-elysia',
		// 	env: { PORT: 3011 },
		// 	...dev_options
		// }
	]
}