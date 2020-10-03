const Rol = require("./Rol");

module.exports = (sequelize, DataTypes) => {
	const Credencial = sequelize.define('Credencial', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
        'nombreCompleto': DataTypes.STRING,
        'email' : DataTypes.STRING,
        'password': DataTypes.STRING,        
    });
    Credencial.hasOne(Rol, {foreignkey:'rolId'});
	return Credencial;
} 
