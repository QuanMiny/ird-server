import Router from 'koa-router'

import userController from '../controller/user.controller'

import { verifyUser, handlePassword } from '../middleware/user.middleware'
import { verifyAuth } from '../middleware/auth.middleware'

const userRouter = new Router({ prefix: '/user' })

// 用户注册
userRouter.post('/', verifyUser, handlePassword, userController.register)

userRouter.get('/:userId', verifyAuth, userController.userInfo)

export default userRouter
