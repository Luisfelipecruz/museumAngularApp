/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU15 PRUEBA -1-  Revisar Despliegue de obras a ser asignadas a una exhibicion", () => {

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

  cy.get("#buttonListarObras").contains("Assign").click();

  cy.get(".display-1").should("contain", "EXHIBITION");
  cy.get("#tablaListadoObrasParaSelect").get("table").contains("th", "Name Artwork").should("be.visible");
  cy.get("#tablaListadoObrasParaSelect").get("table").contains("th", "Year").should("be.visible");
  cy.get("#tablaListadoObrasParaSelect").get("table").contains("th", "Type").should("be.visible");
  cy.get("#tablaListadoObrasParaSelect").get("table").contains("th", "Image").should("be.visible");
  cy.get("#tablaListadoObrasParaSelect").get("table").contains("th", "Action").should("be.visible");
  cy.get("table").find("tr").its("length").should("be.gte", 2);

  });

  it("HU15 PRUEBA -2- Funcionalidad de asignar obra a exhibicion", () => {

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

  cy.get("#buttonListarObras").contains("Assign").click();

  cy.get("#tablaListadoObrasParaSelect")
    .find("tbody>tr")
    .first()
    .find("td")
    .contains("Assign")
    .click();
  cy.wait(1000);

  });
});
