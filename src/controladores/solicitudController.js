const SolicitudService = require('../app/services/solicitudService');

const util = require('../utils/utils');

const SolicitudController = {
    obtenerTodo: async(req, res) => {
        try {
          const allSolicitudes = await SolicitudService.findAll();
          if (allSolicitudes.length > 0) {
            util.setSuccess(200, 'Solicitudes', allSolicitudes);
          } else {
            util.setSuccess(200, 'No hay solicitudes');
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
    },

    crearSolicitud: async (req, res) => {
        const nuevaSolicitud = req.body;
        try {
          const solicitudCreada = await SolicitudService.crearSolicitud(nuevaSolicitud);
          util.setSuccess(201, 'Solicitud agregada', solicitudCreada);
          return util.send(res);
        } catch (error) {
          util.setError(400, error.message);
          return util.send(res);
        }
    },

    borrarSolicitud: async (req, res) => {
      const { id } = req.params;

      if (!Number(id)) {
        util.setError(400, 'Por favor proveenos un valor numerico');
        return util.send(res);
      }
  
      try {
        const solicitudAEliminar = await SolicitudService.borrarSolicitud(id);
  
        if (solicitudAEliminar) {
          util.setSuccess(200, 'Solicitud eliminada');
        } else {
          util.setError(404, `La solicitud con id ${id} no fue encontrada`);
        }
        return util.send(res);
      } catch (error) {
        util.setError(400, error);
        return util.send(res);
      }
    }
}
module.exports =  SolicitudController;