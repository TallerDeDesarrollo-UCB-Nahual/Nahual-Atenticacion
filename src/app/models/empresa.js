module.exports = (sequelize, DataTypes) => {
  const Empresa = sequelize.define('Empresa', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    'nombre': DataTypes.STRING,
    'email': DataTypes.STRING,
    'imagen': DataTypes.STRING
  });
  return Empresa;
}