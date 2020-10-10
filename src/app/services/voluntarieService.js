const {Voluntarie} = require('../models');

const ServicioVoluntarie = {
	registrarVoluntarie: async (request, response) => {
		try {
				const result = await Voluntarie.create(request.body);
				return {message : "El voluntarie fue registrade exitosamente.",result};
		} catch (error) {
			 throw error;
		}
	}
}

module.exports = ServicioVoluntarie;