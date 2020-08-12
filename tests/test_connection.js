const sequelize  = require('../sequelize');

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
  console.log("Conexao com o API LDAP: OK");
}

(async () => {
  await test_db_connection();
  await test_api();
  process.exit(0);
})();



