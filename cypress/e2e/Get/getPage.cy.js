/// <reference types="cypress" />

describe("Get Request", () => {
  it("Page Users", () => {
    cy.request({
      method: "GET",
      url: "https://reqres.in/api/users?page=2",
      header: ["x-api-key: reqres-free-v1"],
    }).then((response) => {
      expect(response.status).to.equal(200);
      console.log(response.body);
      expect(response.body).to.have.property("page", 2);
      expect(response.body).to.have.property("per_page", 6);
      expect(response.body.data[0].id).to.equal(7);
      expect(response.body.data[1].first_name).to.equal("Lindsay");
      expect(response.body.data[3].email).to.equal("byron.fields@reqres.in");
      expect(response.body.data[4].avatar).to.equal(
        "https://reqres.in/img/faces/11-image.jpg"
      );
    });
  });
});
