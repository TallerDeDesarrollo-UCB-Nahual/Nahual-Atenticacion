'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Voluntaries', [
      {
        nombre: 'Voluntarie1',
        email: 'voluntarie1@gmail.com',
        imagen: 'imagen_voluntarie1'
      },
      {
        nombre: 'Voluntarie2',
        email: 'voluntarie2@gmail.com',
        imagen: 'imagen_voluntarie2'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
