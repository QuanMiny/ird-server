import { DataTypes } from 'sequelize'

import sequelize from '../config/mysql'

const model = sequelize.define(
  'role_menu',
  {
    role_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
    },
    menu_id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
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
