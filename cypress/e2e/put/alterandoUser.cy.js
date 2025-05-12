/// <reference types="cypress" />

describe("Put request", () => {
  it("Alterando Dados", () => {
    cy.request({
      method: "PUT",
      url: "https://reqres.in/api/users/255",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
      body: {
        name: "Portella",
        job: "QA Automation",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.name).to.equal("Portella");
      expect(response.body.name).to.not.equal("Joao");
      expect(response.body.job).to.equal("QA Automation");
      expect(response.body).to.have.property("updatedAt");
    });
  });
});
