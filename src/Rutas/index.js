const { Router } = require("express");
const router = Router();
const SolicitudControlador = require("../controladores/solicitudController");
const UsuarioControlador = require("../controladores/usuarioControlador");

router.get("/solicitudes", SolicitudControlador.obtenerTodo);
router.post("/solicitudes", SolicitudControlador.crearSolicitud);
router.delete("/solicitudes/:id", SolicitudControlador.borrarSolicitud);
router.post("/otorgarAcceso", UsuarioControlador.otorgarAccesoAplicacion);
router.post("/revocarAcceso", UsuarioControlador.revocarAccesoAplicacion);
router.post("/verificarAcceso", UsuarioControlador.verificarAcceso);
router.get("/usuariosConAcceso", UsuarioControlador.obtenerUsuariosConAcceso);

module.exports = router;
