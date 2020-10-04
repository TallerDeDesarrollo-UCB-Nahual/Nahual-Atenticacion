const { Credenciales } = require("../../models");
const jwt = require("jsonwebtoken");
const tiempoDeExpiraciondeTokenEnSegundos = 86400;
const bcrypt = require("bcrypt");
const ServicioAutenticacion = {
  iniciarSesion: async (req, res) => {
    console.log(require("../../models"));
    const { email, password } = req.body;
    await Credenciales.findOne({
      where: {
        email: email,
      },
    }).then((usercredential) => {
      if (!usercredential) {
        return res.status(400).send("No existe el usuario");
      }
    
      if (!password === usercredential.password) {
        return res.status(401).send({
          auth: false,
          accessToken: null,
          reason: "Usuario o contrasena invalido",
        });
      }
      const token = jwt.sign(
        {
          id: usercredential.id,
          nombre: usercredential.nombreCompleto,
          email: usercredential.email
        },
        "estaesunaoracionlarga",
        {
          expiresIn: tiempoDeExpiraciondeTokenEnSegundos,
        }
      );
      res.status(200).send({ accessToken: token });
    });
  },
};

module.exports = ServicioAutenticacion;
