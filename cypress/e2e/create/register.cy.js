/// <reference types="cypress" />

describe("Registrando User", () => {
  it("Registrando User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/register",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol1",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
      expect(response.body.id).to.equal(4);
      expect(response.body.token).to.equal("QpwL5tke4Pnpja7X4");
    });
  });
});
