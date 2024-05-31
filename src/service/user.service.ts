import { userModel, roleModel } from '../models'

class UserService {
  async getUserByName(username: string) {
    try {
      const result = await userModel.findOne({
        where: {
          login_name: username,
        },
      })
      return result?.dataValues
    } catch (error) {
      console.log(error)
    }
  }

  async registerUser({
    username,
    password,
  }: {
    username: string
    password: string
  }) {
    try {
      const result = await userModel.create({
        login_name: username,
        login_password: password,
        role_id: 2, // 默认普通用户
      })
      return result?.dataValues
    } catch (error) {
      console.log(error)
    }
  }

  async getUserInfoById(id: number) {
    try {
      const result = await userModel.findOne({
        where: {
          id,
        },
        attributes: ['id', 'login_name', 'real_name', 'mobile'],
        include: [
          {
            model: roleModel,
            attributes: ['role_value', 'role_name', 'role_auth'],
          },
        ],
      })
      return result?.dataValues
    } catch (error) {
      console.log(error)
    }
  }
}

export default new UserService()
