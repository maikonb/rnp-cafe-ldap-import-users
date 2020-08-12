const dotenv = require("dotenv");
dotenv.config();

const config = {
  username:   process.env.MYSQL_USERNAME,
  password:   process.env.MYSQL_PASSWORD,
  database:   process.env.MYSQL_DATABASE,
  host:       process.env.MYSQL_HOST,
  dialect:    "mysql",
}

module.exports = config;