const sequelize  = require('../sequelize');
const axios = require('axios');
const config =require('../config');


async function test_db_connection() {
  try {
    await sequelize.authenticate();
    console.log("Conexao com banco de dados: OK.");
  } 
  catch (error) {
    console.error('Conexao com banco de dados: Erro');
    console.error('Error:', error);
  }
}

async function test_api() {
  
  try {
    let res = await axios.get(`${config.api_url}/test-api`);
    console.log("Conexao com o API LDAP: OK");
  } 
  catch (error) {
    console.error('Conexao com o API LDAP: Erro');
    console.error('Error:', error);
  }

}

(async () => {
  await test_db_connection();
  await test_api();
  process.exit(0);
})();



