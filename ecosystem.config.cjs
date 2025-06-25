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

const namespace = 'ttsp.dev.dev'

module.exports = {
	apps: [
		{
			namespace,
			name: 'landing',
			cwd: 'apps/frontend-nextjs',
			env: { PORT: 3000, NODE_ENV: 'development' },
			script: 'bun',
			args: 'run dev',
			...options
		},
		// {
		// 	name: 'app',
		// 	script: 'bun',
		// 	args: 'dev',
		// 	cwd: 'apps/backend-elysia',
		// 	env: { PORT: 5071 },
		// 	...dev_options
		// }
	]
}