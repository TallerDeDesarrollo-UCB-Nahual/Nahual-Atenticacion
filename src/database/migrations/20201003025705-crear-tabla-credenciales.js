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
        allowNull: false
      },
      email:{
        type: Sequelize.STRING,
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
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
