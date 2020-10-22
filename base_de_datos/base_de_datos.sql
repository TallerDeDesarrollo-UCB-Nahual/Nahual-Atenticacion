CREATE DATABASE usuariosConAcceso;

CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(40),
    email VARCHAR(40),
    tieneAccesoEmpresas boolean,
    tieneAccesoEgresades boolean,
    tieneAccesoVoluntaries boolean
);

INSERT INTO usuarios (nombre, email, tieneAccesoEmpresas, tieneAccesoEgresades, tieneAccesoVoluntaries)
    VALUES ('jorge', 'joe@ibm.com', 'TRUE', 'FALSE', 'FALSE');
