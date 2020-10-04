"use strict";
const express = require("express");
const ruteadorDeAutenticacion = express.Router();
const ServicioAutenticacion = require("./../app/services/auth/ServicioAutenticacion");

ruteadorDeAutenticacion.post("/auth", async (request, response) => {
  await ServicioAutenticacion.iniciarSesion(request, response);
});

module.exports = ruteadorDeAutenticacion;
