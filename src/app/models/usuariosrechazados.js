const sequelize = require('../../config/sequelize-config').sequelize
const DataTypes = require('../../config/sequelize-config').datatype

const UsuarioRechazado = sequelize.define('UsuariosRechazados', {
    nombre: DataTypes.STRING,
    correo: DataTypes.STRING,
    motivo: DataTypes.STRING
  }
);

module.exports = UsuarioRechazado;