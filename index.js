const { 
  SystemUser,
  systemUserSchema
} =  require('./models/system-user');

const loader = require('./services/loader');

const sequelize  = require('./sequelize');

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conectado ao banco de dados.");
  } 
  catch (error) {
    console.error('Falha na conexao com o banco de dados:', error);
    process.exit(1);
  }

  try {
    SystemUser.init(
      systemUserSchema, 
      { sequelize, modelName: 'SystemUser', tableName: 'system_user', timestamps: false }
    );
    
    const users = await SystemUser.findAll();

    if (! users.every(user => user instanceof SystemUser)) {
      console.log("Ocorreu um erro na obtencao dos registros");
      process.exit(1);
    }

    await loader(users);
    process.exit(0); // OK
  } 
  catch (error) {
    console.error('Falha no carregamento dos dados:', error);
  }

})();



