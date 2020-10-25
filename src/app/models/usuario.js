const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false
    },
    permisoEmpresas:{
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    permisoNahual:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
  });

module.exports = Usuario;