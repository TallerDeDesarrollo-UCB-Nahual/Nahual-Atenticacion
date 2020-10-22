const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'ucbpostgres',
  database: 'usuariosConAcceso',
  port: '5432'
});

const obtenerUsuarios = (rew, res)=>{
  res.send('usuarios');
}

module.exports = {
  obtenerUsuarios
}