module.exports = (sequelize, DataTypes) => {
	const Credencial = sequelize.define('Credencial', {
		'id': {
			type: DataTypes.INTEGER,
			primaryKey: true
		},
		'nombreCompleto':{ type:
			DataTypes.STRING(60),
			allowNull: false,
			validate: {
				len: {
					args: [0, 60],
					msg: "El nombre tiene que tener entre 1 a 60 caracteres"
				}
			}
		},
		'email' :{ 
			type: DataTypes.STRING(100),
			allowNull: false,
			validate:{
				isEmail:{
					msg: 'No es un email valido'
				}
			}
		},
        'password': {
			type: DataTypes.STRING,
			allowNull:false,
			validate:{
				len:{
					args:[6,20]
				}
			}
		},        
    });
	//Credencial.hasOne(Rol, {foreignkey:'rolId'});
	Credencial.associate = (models) => {
		Credencial.belongsTo(models.Rol,);
	  };
	return Credencial;
} 
