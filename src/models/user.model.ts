import { DataTypes } from 'sequelize'

import sequelize from '../config/mysql'

const model = sequelize.define(
  'user',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // 登录用户名
    login_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    // 登录密码
    login_password: {
      type: DataTypes.STRING(120),
      allowNull: false,
      defaultValue: '',
    },
    // 用户真实名称
    real_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: '',
    },
    // 手机号码 */
    mobile: {
      type: DataTypes.STRING,
      defaultValue: '',
    },
    // 是否启用：0禁止访问 1正常
    is_enabled: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
    },
    remark: {
      type: DataTypes.STRING(200),
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    },
  },
  {
    freezeTableName: true,
  }
)

export default model
