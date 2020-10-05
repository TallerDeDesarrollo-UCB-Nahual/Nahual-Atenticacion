module.exports = (sequelize, DataTypes) => {
	const Rol = sequelize.define('Rol', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'nombre': DataTypes.STRING
	});

	return Rol;
}