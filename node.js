import { handler } from './src/template.js'
import config from './src/config.js'
import api from './src/service/api.js'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { cors } from 'hono/cors'
import { serve } from '@hono/node-server'

const app = new Hono()
app.use('*', cors())
app.use('*', logger())
app.get('/api', api)
app.get('/', (c) => c.text('你好！访问/test以测试。'))
app.get('/test', handler)

serve({
    fetch: app.fetch,
    port: config.PORT
})
