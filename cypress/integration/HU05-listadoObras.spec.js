/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU05 - Consultar listado de obras de arte", () => {
    cy.get("#navbarNav").contains("Artworks").click();
    cy.wait(1000);

    cy.get("table").contains("th", "Number").should("be.visible");
    cy.get("table").contains("th", "Name").should("be.visible");
    cy.get("table").contains("th", "Year").should("be.visible");
    cy.get("table").contains("th", "Type").should("be.visible");

    cy.get("table").find("tr").its("length").should("be.gte", 2);
  });
});
