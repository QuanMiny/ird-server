import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import { errorHandler } from './error-handler'
import cors from 'koa2-cors'
import { corsHandler } from './cors'
import { router } from '../router'

const app = new Koa()

// ctx.body
app.use(bodyParser())

app.use(cors(corsHandler))

// errorHandler
app.on('error', errorHandler)

// 导入路由
app.use(router.routes())
app.use(router.allowedMethods())

export default app
