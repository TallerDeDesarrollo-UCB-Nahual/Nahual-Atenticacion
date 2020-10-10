const express = require('express');
const router = express.Router();
const servicioEmpresas = require('../app/services/empresaService');

router.post('/empresa', async (request,response)=>{
	try {
			const result = await servicioEmpresas.registrarEmpresa(request,response);
			response.status(200).send(result);
	} catch (error) {
			console.log(error);
	}
});

module.exports = router;