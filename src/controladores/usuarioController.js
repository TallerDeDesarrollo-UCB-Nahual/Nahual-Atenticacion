const UsuarioService = require("../app/services/usuarioServicio");

const util = require("../utils/utils");

const UsuarioController = {
  verificarAcceso: async (req, res) => {
    try {
      const respuesta = await UsuarioService.verificarAcceso(
        req.body.nombre,
        req.body.email,
        req.body.aplicacion
      );
      util.setSuccess(200, "Usuario", respuesta);
      return util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  },

  otorgarAccesoAplicacion: async (req, res) => {
    try {
      const respuesta = await UsuarioService.otorgarAcceso(
        req.body.nombre,
        req.body.email,
        req.body.aplicacion
      );
      util.setSuccess(200, "Usuario", respuesta);
      util.send(res);
    } catch (error) {
      util.setError(400, error);
      return util.send(res);
    }
  }
};
module.exports = UsuarioController;
