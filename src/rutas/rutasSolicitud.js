const { Router } = require('express');
const router = Router();
const SolicitudController = require('../controladores/solicitudController')

router.get('/solicitudes', SolicitudController.obtenerTodo);
router.post('/solicitudes', SolicitudController.crearSolicitud);
router.delete('/solicitudes/:id', SolicitudController.borrarSolicitud);

module.exports = router;