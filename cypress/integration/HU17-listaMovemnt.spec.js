/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it.only("HU17 PRUEBA -1- ", () => {
    cy.get("#navbarNav").contains(" Movements ").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("List").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/movements/list");

    cy.get(".container")
      .find("h2")
      .should("contain", "Movements");
    cy.wait(1000);

    cy.get(".card.p-2.mb-2").should("be.visible");

    cy.get(".card.p-2.mb-2").its("length").should("be.gte", 1);

    cy.get(":nth-child(1) > .card > .card-block > .card-body").find(".card-title").should("be.visible");
    cy.get(":nth-child(1) > .card > .card-block > .card-body").find(".card-text").should("be.visible");

  });
});
