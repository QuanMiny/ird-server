import menuModel from './menu.model'
import roleModel from './role.model'
import roleMenuModel from './roleMenu.model'
import userModel from './user.model'

// import sequelize from '@/config/mysql'

userModel.belongsTo(roleModel, { foreignKey: 'role_id' })

roleModel.belongsToMany(menuModel, {
  through: roleMenuModel,
  foreignKey: 'role_id',
})

menuModel.belongsToMany(roleModel, {
  through: roleMenuModel,
  foreignKey: 'menu_id',
})

// const synchonize = async () => {
//   await sequelize.sync({ force: true }) // 同步
//   // 添加初始角色
//   await roleModel.create({
//     role_name: '管理员',
//     role_value: 'admin',
//     role_auth: 'add,edit,delete,import,export',
//   })
//   await roleModel.create({
//     role_name: '普通用户',
//     role_value: 'user',
//     role_auth: 'add,edit',
//   })
//   // 默认管理员数据 用户必须先创建
//   await userModel.create({
//     login_name: 'admin',
//     login_password:
//       '$2b$10$SAPfKamIxnPmH4QRLHa7ouZOrnKZwXWcgE5h8..qtawcJ.Okh0eba',
//     real_name: '',
//     mobile: '',
//     is_enabled: 1,
//     role_id: 1, // 默认管理员
//   })
// }
// synchonize()

export { menuModel, roleModel, userModel, roleMenuModel }
