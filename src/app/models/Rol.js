const Credencial = require("./Credencial");
module.exports = (sequelize, DataTypes) => {
	const Rol = sequelize.define('Rol', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'nombre': DataTypes.STRING
	});
	Rol.associate = (models) => {
		Rol.hasMany(models.Credencial);
	  };
	return Rol;
}