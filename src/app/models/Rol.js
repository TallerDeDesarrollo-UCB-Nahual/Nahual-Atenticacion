module.exports = (sequelize, DataTypes) => {
	const Rol = sequelize.define('Rol', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'nombre': DataTypes.STRING
	});
	Rol.hasMany(Credencial);
	return Rol;
}