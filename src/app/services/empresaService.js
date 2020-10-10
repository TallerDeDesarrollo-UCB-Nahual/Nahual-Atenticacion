const {Empresa} = require('../models');

const ServicioEmpresa = {
	registrarEmpresa: async (request, response) => {
		try {
				const result = await Empresa.create(request.body);
				return {message : "La empresa fue registrada exitosamente.",result};
		} catch (error) {
			 throw error;
		}
	}
}

module.exports = ServicioEmpresa;