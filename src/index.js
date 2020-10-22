<<<<<<< HEAD:index.js
const aplicacion = require('./Aplicacion');
aplicacion.listen(aplicacion.get('puerto'));
=======
var express = require('express');
var aplicacion = express();
const puerto = 3000;

//middleware
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());

aplicacion.get('/', function(peticion, respuesta) {
  respuesta.send('Bienvenido a nahual');
});

aplicacion.listen(puerto, () => {
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`)
});
>>>>>>> Creacion de carpetas src, controladores y rutas. Instalacion de modulos pg para manejo de base de datos postgres y nodemon, edicion en el package.json scripts:src/index.js
