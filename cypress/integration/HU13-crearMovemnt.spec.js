/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it.only("HU13 PRUEBA -1- ", () => {
    cy.get("#navbarNav").contains("Movements").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("Create").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/movements/create");

    cy.get(".container")
      .find("h2")
      .should("contain", "Create a new movement");
    cy.wait(1000);

    cy.get("input").get("#name").should("have.attr", "id", "name");
    cy.get("input")
      .get("#description")
      .should("have.attr", "id", "description");
    cy.get("input").get("#countryOfOrigin").should("have.attr", "id", "countryOfOrigin");
    cy.get("input").get("#activeYears").should("have.attr", "id", "activeYears");

    cy.get("input").get("#name").blur({ force: true });
    cy.get("input").get("#description").blur({ force: true });
    cy.get(".container").get("#countryOfOrigin").blur({ force: true });
    cy.get(".container").get("#activeYears").blur({ force: true });

    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Name required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Description required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Country of origin required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Active Years required"
    );

    const nameMovment = "Expressionism";
    const descMovment = "Expressionism is an early-20th-century avant-garde art movement that revolutionized European painting and sculpture, and inspired related movements in music, literature and architecture.";
    const countryMovment = "Spain, France";
    const activeMovment = "121";

    cy.get("input").get("#name").click().type(nameMovment);
    cy.get("input").get("#description").click().type(descMovment);
    cy.get("input").get("#countryOfOrigin").click().type(countryMovment);
    cy.get("input").get("#activeYears").click().type(activeMovment);

    cy.get(".container").get(".btn-danger").click();
  });
});
