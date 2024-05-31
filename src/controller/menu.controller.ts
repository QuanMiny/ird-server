import { Context } from 'koa'

import menuService from '../service/menu.service'
import { ERROR_TYPES } from '../constant'

class MenuController {
  async getMenuList(ctx: Context) {
    const { roleId } = ctx.params
    const result = await menuService.getMenuListByRoleId(roleId)
    // 返回菜单为null
    if (!result) {
      const error = new Error(ERROR_TYPES.MENU_NOT_EXISTS)
      return ctx.app.emit('error', error, ctx)
    }
    ctx.body = {
      code: 200,
      data: result,
      msg: '获取菜单列表成功',
    }
  }
}

export default new MenuController()
