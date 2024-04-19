// models/CompanyInfoModel.js
const { Sequelize } = require('sequelize');

const CompanyInfoModel = (sequelize, Sequelize) => {
  const CompanyData = sequelize.define(
    'company_data',
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
      },
    },
    {
      tableName: 'company_data',
      timestamps: false,
    }
  );

  return CompanyData;
};

module.exports = CompanyInfoModel;
