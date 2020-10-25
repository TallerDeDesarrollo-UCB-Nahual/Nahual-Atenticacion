const SolicitudModel = require('../models/solicitud');
const UsuarioModel = require('../models/usuario');
const UsuarioService = {
    otorgarAcceso: async(nombre, email, aplicacion) => {
        const encontrarUsuarioPor = async(email) => {
            try {
                const respuesta = await UsuarioModel.findOne({
                    where: {
                        email: email,
                    },
                });
                return respuesta;
            }
            catch (error) {
                throw error;
            }
        };

        let permiso = '';
        if(aplicacion === 'Nahual')
            permiso = 'permisoNahual';
        else
            permiso = 'permisoEmpresas';
        const usuarioEcontrado = await encontrarUsuarioPor(email);
        if(usuarioEcontrado){
            try {
                const respuesta = await UsuarioModel.update({
                  [permiso]: true,
                });
                return respuesta;
              }
              catch (error) {
                throw error;
              }
        }
        else{
            try {
                const respuesta = await UsuarioModel.create({
                    nombre: nombre,
                    email: email,
                    [permiso]: true,
                });
                return respuesta;
              }
              catch (error) {
                throw error;
              }
        }
    },

}

module.exports = UsuarioService;