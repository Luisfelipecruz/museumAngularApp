/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it.only("HU07 PRUEBA -1- ", () => {
    cy.get("#navbarNav").contains(" Artists ").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("List").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/artists/list");

    cy.get(".container")
      .find("h2")
      .should("contain", "Artistas");
    cy.wait(1000);

    cy.get(".card.p-2.mb-2").should("be.visible");

    cy.get(".card.p-2.mb-2").its("length").should("be.gte", 1);

    cy.get(":nth-child(1) > .card > .card-img-top").click();

    cy.get("#containerDetalleArtista").should("be.visible");


    cy.get(".h3").should('be.visible');
    cy.get("#containerDetalleArtista").get('#tablaDetalleArtist').find('dl').should("contain", "Lugar de nacimiento");
    cy.get("#containerDetalleArtista").get('#tablaDetalleArtist').get('dl > :nth-child(2)').should('be.visible');
    cy.get("#containerDetalleArtista").get('#tablaDetalleArtist').find('dl').should("contain", "Fecha de nacimiento");
    cy.get("#containerDetalleArtista").get('#tablaDetalleArtist').get('dl > :nth-child(4)').should('be.visible');
    cy.get("#containerDetalleArtista").find('img').should('be.visible');


  });
});
