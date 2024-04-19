// models/UserModel.js
const { Sequelize } = require('sequelize');

const UserModel = (sequelize, Sequelize) => {
  const User = sequelize.define(
    'user_mst',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      email: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      file:{
            type:Sequelize.STRING,
      },
      companyId: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: 'company_data', 
          key: 'id',
        },
        field: 'companyId', 
      },
    },
    {
      tableName: 'user_mst',
      timestamps: false,
    }
  );

  return User;
};

module.exports = UserModel;
