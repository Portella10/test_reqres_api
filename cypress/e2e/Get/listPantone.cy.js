/// <reference types="cypress" />

describe("GET request", () => {
  it("List Pantone Colors", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/unknown",
      failOnStatusCode: false,
      headers: {
        "x-api-key": "reqres-free-v1",
      },
    }).then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body).to.have.property("page", 1);
      expect(response.body.data[0].id).to.equal(1);
      expect(response.body.data[1].name).to.equal("fuchsia rose");
      expect(response.body.data[3].color).to.equal("#7BC4C4");
      expect(response.body.data[4].pantone_value).to.equal("17-1456");
    });
  });
});
