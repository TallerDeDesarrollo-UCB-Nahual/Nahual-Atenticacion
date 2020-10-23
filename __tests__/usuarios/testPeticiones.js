const request = require("supertest");
const application = require("../../Aplicacion");

describe("Test de obtener todas las peticiones", () => {
  test("Deberia retornar todas las peticiones", done => {
    request(application)
      .get("/peticiones")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});
