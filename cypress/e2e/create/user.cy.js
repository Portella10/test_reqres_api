/// <reference types="cypress" />
let id = " ";
describe("Create User", () => {
  it("Create User", () => {
    cy.request({
      method: "POST",
      url: "https://reqres.in/api/users",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      body: {
        name: "Joao",
        job: "QA",
      },
    }).then((response) => {
      id = response.body.id;
      expect(response.status).to.equal(201);
      expect(response.body.id).to.equal(id);
      expect(response.body.name).to.equal("Joao");
      expect(response.body.job).to.equal("QA");
      expect(response.body).to.have.property("createdAt");
    });
  });
});
