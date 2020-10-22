const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  password: 'ucbpostgres',
  database: 'usuariosconacceso',
  port: '5432'
});

const obtenerUsuarios = async (peticion, respuesta) => {
  const resp = await pool.query('SELECT * FROM usuarios ORDER BY id ASC');
  respuesta.status(200).json(resp.rows);
};

module.exports = {
  obtenerUsuarios
}