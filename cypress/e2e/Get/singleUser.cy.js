/// <reference types="cypress" />

describe("GET requst", () => {
  it("Single User", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users/2",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.data.id).to.equal(2);
      expect(response.body.data.email).to.equal("janet.weaver@reqres.in");
      expect(response.body.data.email).to.include("@");
      expect(response.body.data.first_name).to.equal("Janet");
      expect(response.body).to.have.property("support");
      expect(response.body.support.text).to.equal(
        "Tired of writing endless social media content? Let Content Caddy generate it for you."
      );
    });
  });
  it("Single User Not Found", () => {
    cy.request({
      url: "https://reqres.in/api/users/23",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.equal(404);
    });
  });
});
