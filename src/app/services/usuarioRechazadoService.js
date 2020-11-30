const usuarioRechazadoModel = require("../models/usuariosrechazados");

const UsuarioRechazadoService = {
  findAll: async () => {
    try {
      return await usuarioRechazadoModel.findAll();
    } catch (error) {
      throw error;
    }
  },

  crearUsuarioRechazado: async (nombre, email) => {
    const nuevoUsuario = {
      nombre: nombre,
      correo: email,
      motivo: "",
    };
    try {
      return await usuarioRechazadoModel.create(nuevoUsuario);
    } catch (error) {
      throw error;
    }
  },

  borrarUsuarioRechazado: async (idUsuario) => {
    try {
      const usuarioABorrar = await usuarioRechazadoModel.findOne({
        where: { id: Number(idUsuario) },
      });

      if (usuarioABorrar) {
        const usuarioEliminado = usuarioRechazadoModel.destroy({
          where: { id: idUsuario },
        });
        return usuarioEliminado;
      }
      return null;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = UsuarioRechazadoService;
