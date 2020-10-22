const express = require('express');
const aplicacion = express();
const puerto = 3000;

//Conexion de sequelize con la base datos postgres
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('usariosconacceso', 'postgres', 'ucbpostgres', {
//     host: 'localhost',
//     dialect: 'postgres'
//   });
// sequelize.authenticate()
// .then(() => {
//   console.log('Conectado')
// })
// .catch(err => {
//   console.log('No se conecto')
// });

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
