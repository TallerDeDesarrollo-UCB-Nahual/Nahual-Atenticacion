const { Router } = require('express');
const router = Router();
const SolicitudController = require('../controladores/solicitudController')
const UsuarioController = require('../controladores/usuarioController')

router.get('/solicitudes', SolicitudController.obtenerTodo);
router.post('/solicitudes', SolicitudController.crearSolicitud);
router.delete('/solicitudes/:id', SolicitudController.borrarSolicitud);
router.post('/otorgarAcceso', UsuarioController.otorgarAccesoAplicacion);
router.get('/verificarAcceso', UsuarioController.verificarAccesoAplicacion);
module.exports = router;