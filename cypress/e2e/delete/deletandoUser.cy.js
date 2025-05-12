/// <reference types="cypress" />

describe("Deletando User", () => {
  it("Deletando User", () => {
    cy.request({
      method: "DELETE",
      url: "https://reqres.in/api/users/255",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.equal(204);
    });
  });
});
