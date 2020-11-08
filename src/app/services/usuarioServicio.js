const UsuarioModel = require("../models/usuario");
const verificarAplicacion = (aplicacion)=>{
  switch(aplicacion)
      {
        case "Nahual": 
          return "permisoNahual";
        case "Empresas":
          return "permisoEmpresas";
        case "Admin":
          return "permisoAdmin";
        default:
          throw new Error("Aplicación no correspondiente.");
      }
}

const UsuarioServicio = {
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
      let acceso = verificarAplicacion(aplicacion);
      const usuarioEncontrado = await UsuarioServicio.encontrarUsuarioPor(email);
      if (usuarioEncontrado) {
        if (usuarioEncontrado[acceso] === true) {
          try {
            return true;
          } catch (error) {
            throw error;
          }
        } else {
          try {
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
    let permiso = verificarAplicacion(aplicacion);
    const usuarioEncontrado = await UsuarioServicio.encontrarUsuarioPor(email);
    console.log(usuarioEncontrado)
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
    const usuarioEncontrado = await UsuarioService.encontrarUsuarioPor(email);
    if (usuarioEncontrado) {
      try {
        usuarioEncontrado[permiso] = false;
        const respuesta = await usuarioEncontrado.save();
        return respuesta;
      } catch (error) {
        throw error;
      }
    } 
    throw new Error("No se encontró el usuario con email: " + email);
  },
  
  obtenerUsuarios: async() => {
    try {
        return await UsuarioModel.findAll();
      } catch (error) {
        throw error;
      }
    }
};

module.exports = UsuarioServicio;
