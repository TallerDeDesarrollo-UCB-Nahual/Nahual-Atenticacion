'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rols', {
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
    return queryInterface.dropTable('Rols');
  }
};
