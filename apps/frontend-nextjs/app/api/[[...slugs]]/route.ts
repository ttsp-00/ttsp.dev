import { Elysia, t } from 'elysia'
import { log } from 'node:console'
import { Database } from 'bun:sqlite'
import swagger from '@elysiajs/swagger'

const app = new Elysia({ prefix: '/api' })
	.use(swagger({
		path: 'swagger', // Do not add / at the beginning
		specPath: 'swagger/api/swagger/json', // Do not add / at the beginning
	}))
	.get('/test', () => {
		return {
			message: 'hello sqlite'
		}
	})
	.get('/', () => 'hello next')
	.post('/', ({ body }) => body, {
		body: t.Object({
			name: t.String()
		})
	})

export const GET = app.handle
export const POST = app.handle