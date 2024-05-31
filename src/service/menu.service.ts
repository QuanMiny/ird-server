import { roleModel, menuModel } from '../models'
import { formatMenus } from '../utils'

class MenuService {
  async getMenuListByRoleId(role_id: number) {
    try {
      const role = await roleModel.findOne({
        where: {
          id: role_id,
        },
        include: [
          {
            model: menuModel,
          },
        ],
      })
      // 无法找到该角色或者角色菜单为空的情况
      if (!role || role.dataValues.menus.length === 0) {
        return null
      } else {
        const menus = formatMenus(role.dataValues.menus)
        return menus
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default new MenuService()
