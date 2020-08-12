const { 
  SystemUser,
  systemUserSchema
} =  require('./models/system-user');

const sequelize  = require('./sequelize');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

/*
SystemUser.init(
  systemUserSchema, 
  { sequelize, modelName: 'SystemUser', tableName: 'system_user' }
);*/



