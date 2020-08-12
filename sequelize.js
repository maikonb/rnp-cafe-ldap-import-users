const Config = require('./config');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize({
  username: Config.username,
  password: Config.password,
  database: Config.database,
  host:     Config.host,

  dialect: 'mysql',
  storage: ':memory:',

  //logging: console.log,

  define: {
    freezeTableName: true,
  },
  logging: false,

});