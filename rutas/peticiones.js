'use strict';
const express = require('express');
const router = express.Router();

router.get("", async (peticion, respuesta) => {
	const peticiones = {
    data: [
      {
        name: "Juan Perez",
        email: "juan.perez@gmail.com",
        resourcePetition: "/nahual-empresas/egresades",
        reason: "Necesito testers para mi empresa"
      },
      {
        name: "Daniel Lopez",
        email: "dani.lopez@gmail.com",
        resourcePetition: "/nahual-empresas/egresades",
        reason: "Necesito testers para una aplicacion que queremos sacar al mercado"
      },
      {
        name: "Monica Chavez",
        email: "monica.chavez@gmail.com",
        resourcePetition: "/nahual-voluntaries/egresades",
        reason: "Quiero mostrar mi conocimiento acerca de testing ya que me parece algo muy importante"
      },
      {
        name: "Pepe Montero",
        email: "pepe.montero@gmail.com",
        resourcePetition: "/nahual-voluntaries/estudiantes",
        reason: "Me apasiona la educacion y este pais necesita mas testers"
      }
    ]
  }
	respuesta.send(peticiones)
});

module.exports = router;
