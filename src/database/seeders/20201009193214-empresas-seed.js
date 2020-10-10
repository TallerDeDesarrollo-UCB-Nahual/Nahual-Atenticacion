'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [
      {
        nombre: 'Eduardo Salvatierra',
        email: 'edublowcorps1@gmail.com',
        imagen: 'https://lh3.googleusercontent.com/a-/AOh14GgUd4vtvj5llaCEJCPM7BN-ucGUzJbY8dPo0lSy'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
