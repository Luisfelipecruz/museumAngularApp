/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU09 - Crear un museo", () => {
    cy.get("#navbarNav").contains("Museums").click();
    cy.wait(1000);

    cy.get("button[class='btn btn-primary']").click();
    cy.wait(1000);

    cy.get("input").get("#name").click().type("nombre del museo");
    cy.get("input").get("#address").click().type("direccion del museo");
    cy.get("input").get("#city").click().type("ciudad del museo");
    cy.get("textarea").get("#description").click().type("descripcion del museo");
    cy.get("textarea").get("#image").click().type("https://i0.wp.com/evemuseografia.com/wp-content/uploads/2019/07/EVE31072019B.jpg?fit=1170%2C693&ssl=1");

    cy.get("button[type='submit']").click();
    cy.wait(1000);
  });
});
