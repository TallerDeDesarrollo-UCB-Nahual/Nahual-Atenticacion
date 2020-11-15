
const SolicitudModel = require('../models/solicitud');
const UsuarioModel = require('../models/usuario')
const UsuarioRechazadoService = require("./usuarioRechazadoService")

const SolicitudService = {

    findAll: async() => {
      try {
          return await SolicitudModel.findAll();
        } catch (error) {
          throw error;
        }
    },

    crearSolicitud: async(nuevaSolicitud) => {
      try {
          return await SolicitudModel.create(nuevaSolicitud);
        } catch (error) {
          throw error;
        }
    },
    borrarSolicitud: async(idSolicitud) => {
      try{
        const solicitudABorrar = await SolicitudModel.findOne({where: {id: Number(idSolicitud)}})

        if(solicitudABorrar){
          console.log(solicitudABorrar.nombre, solicitudABorrar.email);
          UsuarioRechazadoService.crearUsuarioRechazado(solicitudABorrar.nombre, solicitudABorrar.email);
          const solicitudEliminada = SolicitudModel.destroy({
            where:{id:idSolicitud}
          });
          return solicitudEliminada;
        }
        return null;
      } catch (error) {
        throw error;
      }
    },
}

module.exports = SolicitudService;