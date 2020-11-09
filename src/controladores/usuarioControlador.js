const UsuarioService = require("../app/services/usuarioServicio");

const util = require("../utils/utils");

const UsuarioControlador = {
  verificarAcceso: async (solicitud, respuesta) => {
    try {
      const respuestaServicio = await UsuarioService.verificarAcceso(
        solicitud.body.nombre,
        solicitud.body.email,
        solicitud.body.aplicacion
      );
      util.setSuccess(200, "Usuario", respuestaServicio);
      return util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  },

  otorgarAccesoAplicacion: async (solicitud, respuesta) => {
    try {
      const respuestaServicio = await UsuarioService.otorgarAcceso(
        solicitud.body.nombre,
        solicitud.body.email,
        solicitud.body.aplicacion
      );
      util.setSuccess(200, "Usuario", respuestaServicio);
      util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  },

  revocarAccesoAplicacion: async (solicitud, respuesta) => {
    try {
      const respuestaServicio = await UsuarioService.revocarAcceso(
        solicitud.body.email,
        solicitud.body.aplicacion
      );
      util.setSuccess(200, "Usuario", respuestaServicio);
      util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  }
};
module.exports = UsuarioControlador;
