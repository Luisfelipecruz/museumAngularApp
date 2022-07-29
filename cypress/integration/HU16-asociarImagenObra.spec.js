/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU16 - Asociar una imagen a una obra de arte", () => {
    cy.get("#navbarNav").contains("Artworks").click();
    cy.wait(1000);

    cy.get("button[class='btn btn-primary']").click();
    cy.wait(1000);

    cy.get('select').select(2);
    cy.get("input").get("#name").click().type("nombre de la obra");
    cy.get("textarea").get("#description").click().type("descripcion de la obra");
    cy.get("input").get("#year").click().type("2022");

    cy.get("input").get("#altText").click().type("2022");
    cy.get("input").get("#height").click().type("2022");
    cy.get("input").get("#width").click().type("2022");

    cy.get("textarea").get("#mainImage").click().type("https://i0.wp.com/evemuseografia.com/wp-content/uploads/2019/07/EVE31072019B.jpg?fit=1170%2C693&ssl=1");

    cy.get("button[type='submit']").click();
    cy.wait(1000);
  });
});
