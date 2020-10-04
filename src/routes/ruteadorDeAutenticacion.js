"use strict";
const express = require("express");
const ruteadorDeAutenticacion = express.Router();
const ServicioAutenticacion = require("./../app/services/auth/ServicioAutenticacion");

ruteadorDeAutenticacion.get("", (req, res) => {
  res.json({
    message: "locked",
  });
});

ruteadorDeAutenticacion.post("", async (request, response) => {
  try {
    const result = await ServicioAutenticacion.iniciarSesion(request, response);
    response.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
});

module.exports = ruteadorDeAutenticacion;
