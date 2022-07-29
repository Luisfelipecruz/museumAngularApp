/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU06 - Consultar la información detallada de una obra de arte", () => {
    cy.get("#navbarNav").contains("Artworks").click();
    cy.wait(1000);

    cy.get("table").contains("th", "Number").should("be.visible");
    cy.get("table").contains("th", "Name").should("be.visible");
    cy.get("table").contains("th", "Year").should("be.visible");
    cy.get("table").contains("th", "Type").should("be.visible");

    cy.get("table").find("tr").its("length").should("be.gte", 2);

    cy.get("table").find("tbody>tr").first().find("td").find("button").click();
    cy.wait(1000);

    cy.get("label").contains("strong", "Title").should("be.visible");
    cy.get("label").contains("strong", "Year").should("be.visible");
    cy.get("label").contains("strong", "Type").should("be.visible");
    cy.get("label").contains("strong", "Description").should("be.visible");
  });
});
