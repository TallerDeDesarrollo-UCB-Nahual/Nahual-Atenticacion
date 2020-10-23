const express = require('express');
const peticiones = require('./rutas/peticiones');

class Aplicacion {
  constructor() {
    this.express = express();
    this.configurarRutas();
    this.configurarPuerto();
  }

  configurarRutas() {
    this.express.use("/peticiones", peticiones)
  }

  configurarPuerto() {
    this.express.set('puerto', process.env.PORT || 3000);
  }
}

module.exports = new Aplicacion().express;
