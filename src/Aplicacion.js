'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const RUTA_BASE = '/api';
const swaggerUi = require('swagger-ui-express');
const empresas = require('./routes/empresas');
const voluntaries = require('./routes/voluntaries');

class Application {
	constructor() {
		this.express = express();
		this.configurarCors();
		this.configurarExpress();
		this.configurarRutas();
		this.configurarRutaNoEncontrada();
		this.configurarPuerto();
	}

	configurarRutas() {
		this.express.use(RUTA_BASE, empresas);
		this.express.use(RUTA_BASE, voluntaries);
	}

	configurarExpress() {
		this.express.use(bodyParser.json())
		this.express.use(bodyParser.urlencoded({ extended: false }));
	}

	configurarPuerto() {
		this.express.set('puerto', process.env.PORT || 8000);
	}

	configurarRutaNoEncontrada() {
		this.express.use((request, response, next) => {
			const error = new Error("Ruta no encontrada");
			error.status = 404;
			next(error);
		});
	}

	configurarCors() {
		this.express.use(cors());
	}
}

module.exports = new Application().express;