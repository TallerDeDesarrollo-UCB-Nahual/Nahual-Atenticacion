module.exports = (sequelize, DataTypes) => {
  const Credencial = sequelize.define("Credenciales", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    nombreCompleto: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  });
  return Credencial;
};
