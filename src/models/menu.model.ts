import { DataTypes } from 'sequelize'

import sequelize from '../config/mysql'

const model = sequelize.define(
  'menu',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    // 菜单名称
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 页面地址
    path: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 组件地址（菜单为父级时无组件地址）
    component: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 上一级菜单id
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // 排序
    sort: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    // 图标
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 具体名称
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 具体链接地址代表链接菜单 空字符串则不是
    isLink: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
    // 是否显示：0否 1是*/
    isHide: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    // 是否全屏：0否 1是*/
    isFull: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    // 是否固定：0否 1是*/
    isAffix: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    // 是否缓存：0否 1是*/
    isKeepAlive: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 1,
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
