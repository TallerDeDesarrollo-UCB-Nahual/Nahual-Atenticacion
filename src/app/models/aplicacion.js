const sequelize = require("../../config/sequelize-config").sequelize;
const DataTypes = require("../../config/sequelize-config").datatype;

const aplicacion = sequelize.define("Aplicaciones", {
  aplicacion: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = aplicacion;
