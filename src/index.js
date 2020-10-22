const express = require('express');
const aplicacion = express();
const { obtenerUsuarios } = require('../src/Controladores/index.controlador')
const puerto = 3000;

//middleware
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());


//Rutas
aplicacion.use(require('./Rutas/index'));

aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send('Bienvenido a nahual');
});

aplicacion.listen(puerto, () => {
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`)
});
