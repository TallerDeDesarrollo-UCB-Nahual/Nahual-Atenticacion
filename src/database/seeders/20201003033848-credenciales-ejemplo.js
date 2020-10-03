'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Credenciales', [
      {
        nombreCompleto: 'Warmi Guercio',
        email: 'warmiguercio@mail.com',
        password:'nahual123',
        rolId: 1,
      },
      {
        nombreCompleto: 'Tsoft',
        email: 'info@tsoft.com',
        password:'tsoft321',
        rolId: 2,
      },
      {
        nombreCompleto: 'Seba Taranto',
        email: 'staranto@mail.com',
        password:'hunter2',
        rolId: 1,
      }      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Credenciales', null, {});

  }
};
