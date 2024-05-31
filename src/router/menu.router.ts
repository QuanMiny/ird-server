import Router from 'koa-router'

import menuController from '../controller/menu.controller'

import { verifyAuth } from '../middleware/auth.middleware'

const menuRouter = new Router({ prefix: '/menu' })

menuRouter.get('/list/:roleId', verifyAuth, menuController.getMenuList)

export default menuRouter
