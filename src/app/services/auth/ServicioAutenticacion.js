const { Credenciales } = require('../../models');
const jwt = require('jsonwebtoken');
const tiempoDeExpiraciondeTokenEnSegundos = 86400;

const ServicioAutenticacion = {
  iniciarSesion: async (req, res) => {
    const { email, password } = req.body;
    await Credenciales.findOne({
      where: {
        email: email,
      },
    }).then((usercredential) => {
      if (!usercredential) {
        return res.status(400).send('No existe el usuario');
      }
      
      const token = jwt.sign(
        {
          id: usercredential.id,
          nombre: usercredential.nombreCompleto,
          email: usercredential.email,
        },
        'estaesunaoracionlarga',
        {
          expiresIn: tiempoDeExpiraciondeTokenEnSegundos,
        }
      );
      res.status(200).send({ accessToken: token });
    });
  },
};

module.exports = ServicioAutenticacion;
