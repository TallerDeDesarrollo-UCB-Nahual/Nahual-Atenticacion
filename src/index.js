const express = require('express');
const aplicacion = express();
const puerto = 3000;
const bodyParser = require('body-parser');
const rutas = require('./rutas/rutasSolicitud');
//middleware
aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: false }));
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());


//Rutas
aplicacion.use('/api/',rutas);

aplicacion.get('*', function(peticion, respuesta) {
  respuesta.send('Bienvenido a nahual');
});

aplicacion.listen(puerto, () => {
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`)
});
