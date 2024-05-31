import { DataTypes } from 'sequelize'

import sequelize from '../config/mysql'

const model = sequelize.define(
  'role',
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    role_name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    role_value: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    role_auth: {
      type: DataTypes.STRING(200),
      defaultValue: '',
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
