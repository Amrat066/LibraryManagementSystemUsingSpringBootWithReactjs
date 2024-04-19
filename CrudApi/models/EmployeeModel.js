// models/CompanyInfoModel.js
const  Sequelize = require('sequelize');

const EmployeeModel = (sequelize, Sequelize) => {
  const EmployeeData = sequelize.define(
    'EmployeeMaster',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      Password: {
        type: Sequelize.INTEGER,
      },
      Address:{
        type:Sequelize.STRING
      }
    },
    {
      tableName: 'EmployeeMaster',
      timestamps: false,
    }
  );

  return EmployeeData;
};

module.exports = EmployeeModel;
