import { Context, Next } from 'koa'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

import userService from '../service/user.service'
import { ERROR_TYPES } from '../constant'
import { PUBLIC_KEY } from '../config'
import { LoginParams } from '../types'

const verifyLogin = async (ctx: Context, next: Next) => {
  // 1.获取用户名和密码
  const { username, password } = ctx.request.body as LoginParams

  // 2.判断用户名或者密码不能为空
  if (!username || !password) {
    const error = new Error(ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断用户是否存在（用户不存在）
  const user = await userService.getUserByName(username)
  if (!user) {
    const error = new Error(ERROR_TYPES.USER_NOT_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  // 4.判断密码和数据库密码是否一致（加密）
  // bcrypt.compareSync(用户输入密码, 数据库hash密码)
  const isMatch = bcrypt.compareSync(password, user.login_password)
  if (!isMatch) {
    const error = new Error(ERROR_TYPES.PASSWORD_IS_INCORRECT)
    return ctx.app.emit('error', error, ctx)
  }

  // 传入 user
  ctx.user = user

  await next()
}

const verifyAuth = async (ctx: Context, next: Next) => {
  // 1.获取请求头授权信息 token
  const authorization = ctx.headers.authorization
  if (!authorization) {
    const error = new Error(ERROR_TYPES.UNAUTHORIZATION)
    return ctx.app.emit('error', error, ctx)
  }
  const token = authorization.replace('Bearer ', '')

  // 2.验证token
  try {
    const result = jwt.verify(token, PUBLIC_KEY, {
      algorithms: ['RS256'],
    }) // token无效直接进入报错
    ctx.user = result
    await next()
  } catch (err) {
    const error = new Error(ERROR_TYPES.UNAUTHORIZATION)
    ctx.app.emit('error', error, ctx)
  }
}

export { verifyLogin, verifyAuth }
