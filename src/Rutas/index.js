const { Router } = require("express");
const router = Router();
const SolicitudControlador = require("../controladores/solicitudController");
const UsuarioControlador = require("../controladores/usuarioControlador");
const UsuarioRechazadoControlador = require("../controladores/usuarioRechazadoController");
const AplicacionControlador = require("../controladores/aplicacionControlador");

router.get("/solicitudes", SolicitudControlador.obtenerTodo);
router.post("/solicitudes", SolicitudControlador.crearSolicitud);
router.delete("/solicitudes/:id", SolicitudControlador.borrarSolicitud);
router.delete("/solicitudes/rechazar/:id", SolicitudControlador.rechazarSolicitud);
router.post("/otorgarAcceso", UsuarioControlador.otorgarAccesoAplicacion);
router.post("/revocarAcceso", UsuarioControlador.revocarAccesoAplicacion);
router.post("/verificarAcceso", UsuarioControlador.verificarAcceso);
router.get("/usuariosConAcceso", UsuarioControlador.obtenerUsuariosConAcceso);
router.get("/usuariosRechazados", UsuarioRechazadoControlador.obtenerTodo);
router.delete("/usuariosRechazados/:id", UsuarioRechazadoControlador.eliminarUsuario);
router.get("/aplicaciones", AplicacionControlador.obtenerAplicaciones);
router.post("/crearAplicacion", AplicacionControlador.crearAplicacion);

module.exports = router;
