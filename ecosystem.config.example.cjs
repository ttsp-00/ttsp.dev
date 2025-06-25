const options = {
	'watch': false,
	'ignore_watch': [
		'node_modules',
		'.next',
		'.data',
		'*.data*',
		'.git',
		'apps/*/node_modules',
	],
	'watch_options': {
		'followSymlinks': false
	}
}

const namespace = 'ttsp.dev.dev' // namespace better be the same for all apps.

module.exports = {
	apps: [
		{
			namespace, // your namespace. will be visible in pm2 list. and can be used to filter apps.
			name: 'frontend-nextjs', // your app name. will be visible in pm2 list.
			cwd: 'apps/frontend-nextjs',
			env: { PORT: 3000, NODE_ENV: 'development' },
			script: 'bun',
			args: 'run dev',
			...options
		},
	]
}