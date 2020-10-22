const { Router } = require('express');
const router = Router();

const {obtenerUsuarios} = require('../Controladores/index.controlador')

router.get('/usuarios',obtenerUsuarios);

module.exports = router;