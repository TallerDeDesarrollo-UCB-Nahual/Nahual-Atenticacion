const SolicitudModel = require("../models/solicitud");
const UsuarioModel = require("../models/usuario");
const UsuarioService = {
  encontrarUsuarioPor: async email => {
    try {
      const respuesta = await UsuarioModel.findOne({
        where: {
          email: email
        }
      });
      return respuesta;
    } catch (error) {
      throw error;
    }
  },

  verificarAcceso: async (nombre, email, aplicacion) => {
    try {
      let acceso = "";
      if (aplicacion === "Nahual") acceso = "permisoNahual";
      if (aplicacion === "Empresas") acceso = "permisoEmpresas";
      if (aplicacion === undefined)
        throw new Error("aplicacion no correspondiente");
      const usuarioEncontrado = await UsuarioService.encontrarUsuarioPor(email);
      if (usuarioEncontrado) {
        if (usuarioEncontrado[acceso] === true) {
          try {
            console.log("Tienes acceso");
            return true;
          } catch (error) {
            throw error;
          }
        } else {
          try {
            console.log("No tiene Acceso");
            return false;
          } catch (error) {
            throw error;
          }
        }
      } else {
        try {
          return false;
        } catch (error) {
          throw error;
        }
      }
    } catch (error) {
      throw error;
    }
  },

  otorgarAcceso: async (nombre, email, aplicacion) => {
    let permiso = "";
    if (aplicacion === "Nahual") permiso = "permisoNahual";
    if (aplicacion === "Empresas") permiso = "permisoEmpresas";
    if (aplicacion === undefined)
      throw new Error("No se especifico una aplicacion de origen");
    const usuarioEncontrado = await UsuarioService.encontrarUsuarioPor(email);
    if (usuarioEncontrado) {
      try {
        usuarioEncontrado[permiso] = true;
        const respuesta = await usuarioEncontrado.save();
        return respuesta;
      } catch (error) {
        throw error;
      }
    } else {
      try {
        const respuesta = await UsuarioModel.create({
          nombre: nombre,
          email: email,
          [permiso]: true
        });
        return respuesta;
      } catch (error) {
        throw error;
      }
    }
  },

  revocarAcceso: async ( email, aplicacion) => {
    let permiso = "";
    switch (aplicacion) {
      case "Nahual":
        permiso = "permisoNahual"
        break;
      case "Empresas":
        permiso = "permisoEmpresas"
        break;
      default:
        throw new Error("No se encontro la aplicacion: " + aplicacion)
    }
    const usuarioEcontrado = await UsuarioService.encontrarUsuarioPor(email);
    if (usuarioEcontrado) {
      try {
        usuarioEcontrado[permiso] = false;
        const respuesta = await usuarioEcontrado.save();
        return respuesta;
      } catch (error) {
        throw error;
      }
    } 
    throw new Error("No se encontró el usuario con email: " + email);
  }
};

module.exports = UsuarioService;
