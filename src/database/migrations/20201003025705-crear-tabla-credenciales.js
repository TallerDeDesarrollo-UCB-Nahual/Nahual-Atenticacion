'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Credenciales', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombreCompleto:{
        type: Sequelize.STRING,
        allowNull: false.INTEGER,
        validate: {
          len: {
            args: [0, 60],
            msg: "El nombre tiene que tener entre 1 a 60 caracteres"
          }
        }
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          isEmail:{
            msg: 'No es un email valido'
          }
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        validate:{
          len:{
            args:[6,20]
          }
        }
      },
      rolId: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'Roles',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      }
    });
    
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Credenciales');
  }
};
