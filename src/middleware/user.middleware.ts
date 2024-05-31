import { Context, Next } from 'koa'

import userService from '../service/user.service'
import { ERROR_TYPES } from '../constant'
import { PasswordToHash } from '../utils'
import { RegisterParams } from '../types'

const verifyUser = async (ctx: Context, next: Next) => {
  // 1.获取用户名和密码
  const { username, password } = ctx.request.body as RegisterParams

  // 2.判断用户名或者密码不能为空
  if (!username || !password) {
    const error = new Error(ERROR_TYPES.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  // 3.判断用户名不能重复
  const old_user = await userService.getUserByName(username)
  if (old_user) {
    const error = new Error(ERROR_TYPES.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

const handlePassword = async (ctx: Context, next: Next) => {
  const { username, password } = ctx.request.body as RegisterParams
  ctx.user = {
    username,
    password: PasswordToHash(password),
  }
  await next()
}

export { verifyUser, handlePassword }
