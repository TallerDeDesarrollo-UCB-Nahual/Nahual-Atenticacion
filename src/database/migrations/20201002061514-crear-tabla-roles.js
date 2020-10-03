'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Roles', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Roles');
  }
};
