const express = require("express");
const aplicacion = express();
const puerto = 3001;
const bodyParser = require("body-parser");
const cors = require("cors");
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
  console.log(`Tu aplicacion esta corriendo en http://localhost:${puerto}`);
});
