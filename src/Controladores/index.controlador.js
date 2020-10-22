const { Pool } = require('pg');

const pool = new Pool({
});

const obtenerUsuarios = (rew, res)=>{
  res.send('usuarios');
}

module.exports = {
  obtenerUsuarios
}