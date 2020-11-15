const UsuarioRechazadoService = require('../app/services/usuarioRechazadoService');

const util = require('../utils/utils');

const UsuarioRechazadoController = {
    obtenerTodo: async(req, res) => {
        try {
          const allUsuarios = await UsuarioRechazadoService.findAll();
          if (allUsuarios.length > 0) {
            util.setSuccess(200, 'Usuarios', allUsuarios);
          } else {
            util.setSuccess(200, 'No hay usuarios', []);
          }
          return util.send(res);
        } catch (error) {
          util.setError(400, error);
          return util.send(res);
        }
    },

    eliminarUsuario: async(req,res) => {
        const { id } = req.params;

        try {
            const eliminarUsuario = await UsuarioRechazadoService.borrarUsuarioRechazado(id);
            if(eliminarUsuario){
                util.setSuccess(200, 'Solicitud eliminada');
            }
            else {
                util.setError(404, `La solicitud con id ${id} no fue encontrada`);
            }
            return util.send(res);
          } catch (error) {
            util.setError(400, error);
            return util.send(res);
          }
    }
}

module.exports = UsuarioRechazadoController;