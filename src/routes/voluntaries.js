const express = require('express');
const router = express.Router();
const servicioVoluntarie = require('../app/services/voluntarieService');

router.post('/voluntarie', async (request,response)=>{
	try {
			const result = await servicioVoluntarie.registrarVoluntarie(request,response);
			response.status(200).send(result);
	} catch (error) {
			console.log(error);
	}
});

module.exports = router;