const dotenv = require('dotenv');
const Sequelize = require('sequelize');
const mysqlConnection = {}

dotenv.config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.HOST, 
    dialect: 'mysql',
  
    operatorAliases: false,
    
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
  
    },
  
  })

mysqlConnection.sequelize = sequelize;
mysqlConnection.Sequelize = Sequelize;


module.exports = mysqlConnection; //exporting the connection