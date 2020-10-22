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
