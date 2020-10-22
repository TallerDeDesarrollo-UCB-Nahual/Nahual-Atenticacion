CREATE DATABASE usuariosConAcceso;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    email VARCHAR(40),
    tieneAccesoEmpresas boolean,
    tieneAccesoEgresades boolean,
    tieneAccesoVoluntaries boolean
);