
const SolicitudModel = require('../models/solicitud');
const UsuarioModel = require('../models/usuario')
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

    crearUsuario: async(usuario) => {
      try {
        const respuesta = await UsuarioModel.create(usuario);
        return respuesta;
      }
      catch (error) {
        throw error;
      }
    },

    otorgarAcceso: async(email, aplicacion) => {
      try {
        let permiso = '';
        if(aplicacion === 'Nahual')
          permiso = 'permisoNahual';
        else
          permiso = 'permisoEmpresas';
        const respuesta = await UsuarioModel.update({
          [permiso]: true,
        });
        return respuesta;
      }
      catch (error) {
        throw error;
      }
    }
}

module.exports = SolicitudService;