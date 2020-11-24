const AplicacionService = require("../app/services/aplicacionServicio");
const util = require("../utils/utils");

const AplicacionControlador = {
  obtenerAplicaciones: async (solicitud, respuesta) => {
    try {
      const todasLasAplicaciones = await AplicacionService.obtenerAplicaciones();
      if (todasLasAplicaciones.length > 0) {
        util.setSuccess(200, "Aplicaciones", todasLasAplicaciones);
      } else {
        util.setSuccess(200, "No hay aplicaciones.");
      }
      return util.send(respuesta);
    } catch (error) {
      util.setError(400, error);
      return util.send(respuesta);
    }
  },

  crearAplicacion: async (solicitud, respuesta) => {
    const nuevaAplicacion = solicitud.body;
    try {
      const aplicacionCreada = await AplicacionService.crearAplicacion(
        nuevaAplicacion
      );
      util.setSuccess(201, "Aplicación registrada.", aplicacionCreada);
      return util.send(respuesta);
    } catch (error) {
      util.setError(400, error.message);
      return util.send(respuesta);
    }
  },
};
module.exports = AplicacionControlador;
