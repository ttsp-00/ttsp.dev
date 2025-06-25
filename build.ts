import { $ } from 'bun'
import { log } from 'node:console'

log('Building...')

log('Install monorepo dependencies')
await $`rm -rf node_modules && bun i`

log('Install frontend-nextjs dependencies and build')
await $`cd apps/frontend-nextjs && rm -rf node_modules && bun i && bun run build`

await $`pm2 list`

log('Done')