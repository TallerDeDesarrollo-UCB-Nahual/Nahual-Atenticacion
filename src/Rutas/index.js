const { Router } = require('express');
const router = Router();

const {obtenerUsuarios, autorizarUsuario} = require('../Controladores/index.controlador')

router.get('/usuarios',obtenerUsuarios);

router.post('/usuarios/autorizar', autorizarUsuario);

module.exports = router;