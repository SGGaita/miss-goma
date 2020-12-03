var Sequelize = require('sequelize');
var mysqlConnection = require('../config/db_auth');

module.exports = mysqlConnection.sequelize.define(
  'users', {
    id_user: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    fname:{
       type: Sequelize.STRING
      },
    lname:{ 
      type: Sequelize.STRING
    },
    userName: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
    },
    image: {
    type: Sequelize.STRING,
    },
    role: {
      type: Sequelize.STRING,
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW
    }
  }
);