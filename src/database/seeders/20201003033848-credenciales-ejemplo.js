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
      },
      {
        nombreCompleto: 'ctrlaltdel',
        email: 'ctrlalt@outlook.com',
        password:'delete',
        rolId: 1,
      },
      {
        nombreCompleto: 'HalSoft',
        email: 'rrhh@halsoft.com',
        password:'tecnologia',
        rolId: 1,
      },
      {
        nombreCompleto: 'Diego Diaz',
        email: 'diegodiaz1@mail.com',
        password:'invalida',
        rolId: 1,
      },
      {
        nombreCompleto: 'Guillermo Posebon',
        email: 'guiposeb@mail.com',
        password:'holamundo',
        rolId: 1,
      },
      {
        nombreCompleto: 'Daniel Laco',
        email: 'danlaco@mail.com',
        password:'nombredemiperro',
        rolId: 1,
      },
      {
        nombreCompleto: 'Patricia Scalzone',
        email: 'patizone@mail.com',
        password:'pelifavorita',
        rolId: 1,
      },
      {
        nombreCompleto: 'Abraham Segovia',
        email: 'segoviaa@mail.com',
        password:'segovia90',
        rolId: 1,
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Credenciales', null, {});

  }
};
