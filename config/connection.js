// call / import the Sequelize constructor from the library
const Sequelize = require('sequelize');

require('dotenv').config();

// create connection to db, pass in MySQL info for username and password
const sequelize = new Sequelize('just_tech_news_db', '', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: 3306
});

module.exports = sequelize;