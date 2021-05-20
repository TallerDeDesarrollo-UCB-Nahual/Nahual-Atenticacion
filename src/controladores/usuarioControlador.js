const UsuarioServicio = require("../app/services/usuarioServicio");

const util = require("../utils/utils");

const UsuarioControlador = {
  verificarAccesoApps: async (solicitud, respuesta) => {
    try {
      const respuestaServicio = await UsuarioServicio.verificarAccesoApps(
        solicitud.body.nombre,
        solicitud.body.email
      );
      util.setSuccess(200, "Usuario", respuestaServicio);
      return util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  },

  verificarAcceso: async (solicitud, respuesta) => {
    try {
      const respuestaServicio = await UsuarioServicio.verificarAcceso(
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
      const respuestaServicio = await UsuarioServicio.otorgarAcceso(
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
      const respuestaServicio = await UsuarioServicio.revocarAcceso(
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

  obtenerUsuariosConAcceso: async(solicitud, respuesta) => {
    try {
      const todosLosUsuarios = await UsuarioServicio.obtenerUsuarios();
      if (todosLosUsuarios.length > 0) {
        util.setSuccess(200, 'Usuarios', todosLosUsuarios);
      } else {
        util.setSuccess(200, 'No hay usuarios');
      }
      return util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  }
};
module.exports = UsuarioControlador;
