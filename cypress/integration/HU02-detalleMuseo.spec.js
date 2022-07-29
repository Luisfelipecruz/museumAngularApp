/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU02 - Consultar la información detallada de un museo", () => {
    cy.get("#navbarNav").contains("Museums").click();
    cy.wait(1000);

    cy.get("table").contains("th", "#").should("be.visible");
    cy.get("table").contains("th", "Museum").should("be.visible");
    cy.get("table").contains("th", "Address").should("be.visible");
    cy.get("table").contains("th", "City").should("be.visible");

    cy.get("table").find("tr").its("length").should("be.gte", 2);

    cy.get("table").find("tbody>tr").first().find("td").find("button").click();
    cy.wait(1000);

    cy.get("label").contains("strong", "Museum").should("be.visible");
    cy.get("label").contains("strong", "Address").should("be.visible");
    cy.get("label").contains("strong", "City").should("be.visible");
    cy.get("label").contains("strong", "Description").should("be.visible");
  });
});
