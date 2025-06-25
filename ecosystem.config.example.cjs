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
	'watch_options': {
		'followSymlinks': false
	}
}

const namespace = 'ttsp.dev.dev'

module.exports = {
	apps: [
		{
			namespace, // your namespace. will be visible in pm2 list. and can be used to filter apps.
			name: 'frontend', // your app name. will be visible in pm2 list.
			cwd: 'apps/frontend-nextjs',
			env: { PORT: 3000, NODE_ENV: 'development' },
			script: 'bun',
			args: 'run dev',
			...options
		},
	]
}