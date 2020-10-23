const request = require("supertest");
const aplicacion = require("../../Aplicacion");

describe("Test de obtener todas las peticiones", () => {
  test("Deberia retornar todas las peticiones", terminada => {
    request(aplicacion)
      .get("/peticiones")
      .then(respuesta => {
        expect(respuesta.statusCode).toBe(200);
        terminada();
      });
  });
});
