'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rols', [
      {
        nombre: 'Voluntarie',
      },
      {
        nombre: 'Empresa',
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
