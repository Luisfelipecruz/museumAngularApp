/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU04 PRUEBA -1-  Revisar funcionamiento de detalle exbihiciones", () => {
    cy.get("#navbarNav").contains("Exhibition").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("List").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/exhibition/true");
    cy.get(".display-1").should("contain", "EXHIBITION");
    cy.get("table").contains("th", "Name").should("be.visible");
    cy.get("table").contains("th", "Sponsor").should("be.visible");
    cy.get("table").contains("th", "#").should("be.visible");
    cy.get("table").contains("th", "Actions").should("be.visible");
    cy.get("table").find("tr").its("length").should("be.gte", 2);

    cy.get("table")
    .find("tbody>tr")
    .first()
    .find("td")
    .find("button")
    .click();
  cy.wait(1000);


  cy.get(".display-1").should("contain", "EXHIBITION");
  cy.get("#tablaDetalleDescripcionExhibicion").get("table").contains("th", "Exhibition description").should("be.visible");
  cy.get("#tablaDetalleDescripcionExhibicion").get("table").contains("th", "Sponsor description").should("be.visible");
  cy.get("table").find("tr").its("length").should("be.gte", 2);

  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Name").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Year").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Type").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Description").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Image").should("be.visible");
  cy.get("table").find("tr").its("length").should("be.gte", 2);

  });

  it("HU04 PRUEBA -2-  Redireccion desde carrusel pasando por museos hasta detalle exhibiciones", () => {
    cy.get("#museoSeccionCarrusel").contains("See museums").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/museum");
    cy.get(".display-1").should("contain", "Museums");
    cy.get(".table")
      .find("tbody>tr")
      .first()
      .find("td")
      .contains("See")
      .click();
    cy.wait(1000);

    cy.get("#tablaDetalleMuseo")
      .get("#tablaListadoExhibicion")
      .find("tbody>tr")
      .first()
      .find("td")
      .find("a")
      .click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/exhibicion/");
    cy.get(".display-1").should("contain", "EXHIBITION");
    cy.get("table").contains("th", "Name").should("be.visible");
    cy.get("table").contains("th", "Sponsor").should("be.visible");
    cy.get("table").contains("th", "#").should("be.visible");
    cy.get("table").contains("th", "Actions").should("be.visible");

    cy.wait(1000);
    cy.get("table").find("tr").its("length").should("be.gte", 2);
    cy.wait(1000);

    cy.get("table")
    .find("tbody>tr")
    .first()
    .find("td")
    .find("button")
    .click();
  cy.wait(1000);

  cy.get(".display-1").should("contain", "EXHIBITION");
  cy.get("#tablaDetalleDescripcionExhibicion").get("table").contains("th", "Exhibition description").should("be.visible");
  cy.get("#tablaDetalleDescripcionExhibicion").get("table").contains("th", "Sponsor description").should("be.visible");
  cy.get("table").find("tr").its("length").should("be.gte", 2);

  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Name").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Year").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Type").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Description").should("be.visible");
  cy.get("#tablaListadoObrasExhibicion").get("table").contains("th", "Image").should("be.visible");
  cy.get("table").find("tr").its("length").should("be.gte", 2);

  });
});
