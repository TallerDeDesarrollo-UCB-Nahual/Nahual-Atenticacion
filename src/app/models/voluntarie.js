module.exports = (sequelize, DataTypes) => {
  const Voluntarie = sequelize.define('Voluntarie', {
    'id': {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    'nombre': DataTypes.STRING,
    'email': DataTypes.STRING,
    'imagen': DataTypes.STRING
  });
  return Voluntarie;
}