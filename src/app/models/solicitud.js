const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

  const Solicitud = sequelize.define('Solicitud', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reason:{
      type: DataTypes.STRING,
      allowNull: false
    }
  });

module.exports = Solicitud;