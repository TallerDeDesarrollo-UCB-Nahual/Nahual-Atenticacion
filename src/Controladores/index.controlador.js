const { Pool } = require('pg');
const axios = require('axios').default;

const pool = new Pool({
});

const obtenerUsuarios = (rew, res)=>{
  res.send('usuarios');
}

const autorizarUsuario = async (req, res) => {
  const userId = req.body.userId;
  const opcionesToken = {
    method: 'POST',
    url: 'https://dev-0563c-jv.us.auth0.com/oauth/token',
    headers: {'content-type': 'application/json'},
    data: {
      grant_type: 'client_credentials',
      client_id: process.env.auth_clientId,
      client_secret: process.env.auth_secret,
      audience: 'https://dev-0563c-jv.us.auth0.com/api/v2/',
      
    }
  };

  const responseToken = await axios.request(opcionesToken);
  
  const opcionesAutorizar = {
    method: 'PATCH',
    url: `https://dev-0563c-jv.us.auth0.com/api/v2/users/${userId}`,
    headers: {authorization: `Bearer ${responseToken.data.access_token}`, 'content-type': 'application/json'},
    data: {
      app_metadata: {
        has_access_Nahual_Egresades: false
      }
    }
  }

  const responseAutorizar = await axios.request(opcionesAutorizar);
  res.send(responseAutorizar.data);
}

module.exports = {
  obtenerUsuarios,
  autorizarUsuario,
}