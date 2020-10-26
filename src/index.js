<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:index.js
const aplicacion = require('./Aplicacion');
aplicacion.listen(aplicacion.get('puerto'));
=======
var express = require('express');
var aplicacion = express();
=======
const express = require('express');
const aplicacion = express();
<<<<<<< HEAD
const { obtenerUsuarios } = require('../src/Controladores/index.controlador')
>>>>>>> Se crearon archivos index para Controladores y Rutas
=======
>>>>>>> adding solicitud endpoints
const puerto = 3000;
const bodyParser = require('body-parser');

=======
const express = require("express");
const aplicacion = express();
const puerto = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");
>>>>>>> Se agrego Cors
//middleware
aplicacion.use(cors());
aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: false }));
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());

//Rutas
aplicacion.use(require("./rutas/index"));

aplicacion.get("*", function(peticion, respuesta) {
  respuesta.send("Bienvenido a nahual");
});

aplicacion.listen(puerto, () => {
<<<<<<< HEAD
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`)
<<<<<<< HEAD
<<<<<<< HEAD
=======
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`);
>>>>>>> Se agrego Cors
});
>>>>>>> Creacion de carpetas src, controladores y rutas. Instalacion de modulos pg para manejo de base de datos postgres y nodemon, edicion en el package.json scripts:src/index.js
=======
});
>>>>>>> Otorgar acceso ruta
=======
});
>>>>>>> adding solicitud endpoints
