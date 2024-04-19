// config/Dbconfigmain.js

const dotenv = require("dotenv");
const Sequelize = require("sequelize");
const UserModel = require('../models/UserModel');
const CompanyInfoModel = require('../models/CompanyInfoModel');
const EmployeeModel =require('../models/EmployeeModel');

dotenv.config();

const sequelize = new Sequelize({
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_DBPORT,
  dialect: process.env.MYSQL_DIALECT,
  logQueryParameters: true,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been successfully established");
  })
  .catch((error) => {
    console.log("Unable to connect to the database: " + error);
  });

const User = UserModel(sequelize, Sequelize);
const CompanyData = CompanyInfoModel(sequelize, Sequelize);
const EmployeeData = EmployeeModel(sequelize, Sequelize);


User.belongsTo(CompanyData, { foreignKey: 'companyId' });

sequelize.sync()
  .then(() => {
    console.log("Database synchronized with models");
  })
  .catch((error) => {
    console.log("Unable to synchronize database with models: " + error);
  });


const dbConfig = {
  sequelize: sequelize,
  Sequelize: Sequelize,
  Sequelize:Sequelize,
  model: {
    User: User,
    CompanyData: CompanyData,
    EmployeeData:EmployeeData
  }
};

module.exports = dbConfig;