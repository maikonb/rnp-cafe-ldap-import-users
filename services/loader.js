const axios = require('axios');
const config =require('../config');

function logError(error) {
  if (error.response) {
    console.log("API HTTP LDAP retornou um erro ao processar a requisicao.");
    console.log(error.response.data);
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    console.log("Timeout ao tentar conectar à API HTTP LDAP");
  } else {
    console.log('Error', error.message);
  }
}

async function loadUsers(users=[]) {
  for (let i=0; i<users.length; i++) {
    let user_data = users[i].dataValues;
    try {
      let res = await axios.post(`${config.api_url}/users`, user_data);
      if (res.status == 201)
        console.log(`Criado [ ${i+1} / ${users.length}] - ID ${user_data.id}`);
    }
    catch(error) {
      console.log("Erro no usuario: ", i);
      console.log("Erro no usuario: ", user_data);
      logError(error);
      throw new Error(`Erro no carregamento de usuarios. Veja o log acima.`);
    }
  }
}

module.exports = loadUsers;