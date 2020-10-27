const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

  const Solicitud = sequelize.define('Solicitud', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    razon:{
      type: DataTypes.STRING,
      allowNull: false
    },
    aplicacion:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Solicitud;