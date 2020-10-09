'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [
      {
        nombre: 'Empresa1',
        email: 'empresa1@gmail.com',
        imagen: 'imagen_empresa1'
      },
      {
        nombre: 'Empresa2',
        email: 'empresa2@gmail.com',
        imagen: 'imagen_empresa2'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
