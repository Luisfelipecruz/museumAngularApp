/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU14 PRUEBA -1-  Validacion formulario crear Sponsor", () => {
    cy.get("#navbarNav").contains("Exhibition").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("Create sponsor").click();
    cy.wait(1000);

    cy.url().should(
      "contain",
      "http://localhost:4200/exhibicion/createSponsor"
    );
    cy.get(".container")
      .find("h3")
      .should("contain", "Create a new Sponsor");
    cy.wait(1000);

    cy.get("input").get("#name").should("have.attr", "id", "name");
    cy.get("input").get("#description").should("have.attr", "id", "description");
    cy.get("input").get("#website").should("have.attr", "id", "website");

    cy.get("input").get("#name").blur({ force: true });
    cy.get("input").get("#description").blur({ force: true });
    cy.get(".container").get("#website").blur({ force: true });


    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Name required");
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Description required");
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Website required");

    const nombreSponsor = "exposicion de prueba";
    const descripcionSponsor = "prueba end to end de HU 14";
    const websiteSponsor = "https://www.linkedin.com/in/luis-felipe-cruz-ceballos-771a95a8/";

    cy.get("input").get("#name").click().type(nombreSponsor);
    cy.get("input").get("#description").click().type(descripcionSponsor);
    cy.get("input").get("#website").click().type(websiteSponsor);

    cy.get(".container").get(".btn.btn-secondary").click();

  });

  it("HU10 PRUEBA -2- Funcionalidad de crear Sponsor", () => {

    cy.get("#navbarNav").contains("Exhibition").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("Create sponsor").click();
    cy.wait(1000);

    cy.url().should(
      "contain",
      "http://localhost:4200/exhibicion/createSponsor"
    );
    cy.get(".container")
      .find("h3")
      .should("contain", "Create a new Sponsor");
    cy.wait(1000);

    cy.get("input").get("#name").should("have.attr", "id", "name");
    cy.get("input").get("#description").should("have.attr", "id", "description");
    cy.get("input").get("#website").should("have.attr", "id", "website");

    cy.get("input").get("#name").blur({ force: true });
    cy.get("input").get("#description").blur({ force: true });
    cy.get(".container").get("#website").blur({ force: true });


    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Name required");
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Description required");
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should("contain", "Website required");

    const nombreSponsor = "exposicion de prueba";
    const descripcionSponsor = "prueba end to end de HU 14";
    const websiteSponsor = "https://www.linkedin.com/in/luis-felipe-cruz-ceballos-771a95a8/";

    cy.get("input").get("#name").click().type(nombreSponsor);
    cy.get("input").get("#description").click().type(descripcionSponsor);
    cy.get("input").get("#website").click().type(websiteSponsor);

    cy.get(".container").get(".btn.btn-primary").click();
  });
});
