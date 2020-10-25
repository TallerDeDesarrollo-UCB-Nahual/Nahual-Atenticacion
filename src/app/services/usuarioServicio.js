const SolicitudModel = require('../models/solicitud');
const UsuarioModel = require('../models/usuario');
const UsuarioService = {
    encontrarUsuarioPor: async(email) => {
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
    },

    otorgarAcceso: async(nombre, email, aplicacion) => {
        let permiso = '';
        if(aplicacion === 'Nahual')
            permiso = 'permisoNahual';
        if(aplicacion === 'Empresas')
            permiso = 'permisoEmpresas';
        if(aplicacion === undefined)
            throw new Error('No se especifico una aplicacion de origen');
        const usuarioEcontrado = await UsuarioService.encontrarUsuarioPor(email);
        if(usuarioEcontrado){
            try {
                usuarioEcontrado[permiso] = true;
                const respuesta = await usuarioEcontrado.save();
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