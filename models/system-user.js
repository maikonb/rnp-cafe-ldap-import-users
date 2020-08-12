const { Sequelize, Model, DataTypes } = require('sequelize');

class SystemUser extends Model {}

const systemUserSchema = {
  id:                { type: Sequelize.UUID, allowNull: true, primaryKey: true  },
  perfil_id:         { type: Sequelize.INTEGER,  defaultValue: null,  allowNull: true  },
  lotacao_id:        { type: Sequelize.INTEGER,  defaultValue: null,  allowNull: true  },
  curso_id:          { type: Sequelize.INTEGER,  defaultValue: null,  allowNull: true  },
  name:              { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  surname:           { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  matricula:         { type: Sequelize.STRING,  defaultValue: null,  allowNull: true  },
  documento:         { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  data_nascimento:   { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  rg:                { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  rg_uf:             { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  rg_emissao:        { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  celular:           { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  setor:             { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  login:             { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  password:          { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  email:             { type: Sequelize.STRING(100),  defaultValue: null,  allowNull: true  },
  frontpage_id:      { type: Sequelize.INTEGER, defaultValue: null,  allowNull: true  },
  system_unit_id:    { type: Sequelize.INTEGER, defaultValue: null,  allowNull: true  },
  active:            { type: Sequelize.STRING(1),    defaultValue: null,  allowNull: true  },
  created_at:        { type: Sequelize.STRING,  defaultValue: null,  allowNull: true  },
};

module.exports = { SystemUser, systemUserSchema };
