const express = require('express');
const aplicacion = express();
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const rutas = require('./rutas/rutasSolicitud');
//middleware
aplicacion.use(bodyParser.json());
aplicacion.use(bodyParser.urlencoded({ extended: false }));
aplicacion.use(express.json());
aplicacion.use(express.urlencoded());


//Rutas
aplicacion.use('/api',rutas);
aplicacion.set('port', PORT)

aplicacion.get('*', function(peticion, respuesta) {
  respuesta.send('Bienvenido a nahual');
});

aplicacion.listen(PORT, () => console.log(`Listening on ${ PORT }`))
