const aplicacionModelo = require('../models/aplicacion');

const AplicacionServicio = {
    obtenerAplicaciones: async() => {
      try {
          return await aplicacionModelo.findAll();
        } catch (error) {
          throw error;
        }
    },

    crearAplicacion: async(nuevaAplicacion) => {
      try {
          return await aplicacionModelo.create(nuevaAplicacion);
        } catch (error) {
          throw error;
        }
    },
}

module.exports = AplicacionServicio;