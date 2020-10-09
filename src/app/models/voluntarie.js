'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Voluntarie extends Model {
    static associate(models) {
    }
  };
  Voluntarie.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    imagen: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Voluntarie',
  });
  return Voluntarie;
};