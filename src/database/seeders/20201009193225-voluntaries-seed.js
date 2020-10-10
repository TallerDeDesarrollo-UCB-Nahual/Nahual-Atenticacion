'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Voluntaries', [
      {
        nombre: 'Kevin Suarez',
        email: 'kivosuarez@gmail.com',
        imagen: 'https://lh3.googleusercontent.com/a-/AOh14GjOggV5kWFsL16keBWlCCaFvKn4siXuKbHluo8T=s96-c'
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rols', null, {});
  }
};
