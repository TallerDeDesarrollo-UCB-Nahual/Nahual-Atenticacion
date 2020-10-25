const express = require('express');
const peticiones = require('./rutas/peticiones');
const cors = require('cors');

class Aplicacion {
  constructor() {
    this.express = express();
    this.configurarCors();
    this.configurarRutas();
    this.configurarPuerto();
  }

  configurarRutas() {
    this.express.use("/peticiones", peticiones)
  }

  configurarPuerto() {
    this.express.set('puerto', process.env.PORT || 3000);
  }
  configurarCors(){
    this.express.use(cors());
  }
}

module.exports = new Aplicacion().express;
