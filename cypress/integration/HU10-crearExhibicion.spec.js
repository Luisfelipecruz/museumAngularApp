/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it("HU10 PRUEBA -1-  Validacion formulario crear exhibicion", () => {
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

    cy.get("#ActionesModuloExhibiciones")
      .contains("a", "Create Exhibition")
      .click();
    cy.wait(1000);

    cy.url().should(
      "contain",
      "http://localhost:4200/exhibicion/createExhibicion"
    );
    cy.get(".container")
      .find("h3")
      .should("contain", "Create a new Exhibition");
    cy.wait(1000);

    cy.get("input").get("#name").should("have.attr", "id", "name");
    cy.get("input")
      .get("#description")
      .should("have.attr", "id", "description");
    cy.get("input").get("#idSponsor").should("have.attr", "id", "idSponsor");
    cy.get("input").get("#idMuseum").should("have.attr", "id", "idMuseum");

    cy.get("input").get("#name").blur({ force: true });
    cy.get("input").get("#description").blur({ force: true });
    cy.get(".container").get("#idSponsor").blur({ force: true });
    cy.get(".container").get("#idMuseum").blur({ force: true });

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
      "Sponsor required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Museum required"
    );

    const nombreExposicion = "exposicion de prueba";
    const descripcionExposicion = "prueba end to end de HU 10";
    cy.get("input").get("#name").click().type(nombreExposicion);
    cy.get("input").get("#description").click().type(descripcionExposicion);

    cy.get(".container")
      .get("#idSponsor")
      .select("Greater Bendigo", { force: true })
      .invoke("val")
      .should("contain", "101");

    cy.get(".container")
      .get("#idMuseum")
      .select("Bendigo Art Gallery", { force: true })
      .invoke("val")
      .should("contain", "100");

    cy.get(".container").get(".btn.btn-secondary").click();
  });

  it("HU10 PRUEBA -2- Funcionalidad de crear exhibicion", () => {
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

    cy.get("#ActionesModuloExhibiciones")
      .contains("a", "Create Exhibition")
      .click();
    cy.wait(1000);

    cy.url().should(
      "contain",
      "http://localhost:4200/exhibicion/createExhibicion"
    );
    cy.get(".container")
      .find("h3")
      .should("contain", "Create a new Exhibition");
    cy.wait(1000);

    cy.get(".container")
    .get("#idSponsor")
    .find("option")
    .last()
    .invoke('prop', 'value')
    .as('text')

    cy.get('@text').then(($text) => {
    let listNum =$text.split(":");
    cy.get("#navbarNav").contains("Exhibition").click();
    cy.wait(1000);
    cy.get(".dropdown-menu.show").contains("Create sponsor").click();
    cy.wait(1000);
    cy.get("input").get("#name").click().type("exposicion de prueba "+ listNum[0]);
    cy.wait(1000);
  })

    const descripcionSponsor = "prueba end to end de HU 14";
    const websiteSponsor =
      "https://www.linkedin.com/in/luis-felipe-cruz-ceballos-771a95a8/";

    cy.get("input").get("#description").click().type(descripcionSponsor);
    cy.get("input").get("#website").click().type(websiteSponsor);

    cy.get(".container").get(".btn.btn-primary").click();
    cy.wait(1000);

    // Ya creado el sponsor nuevo se procede a seleccionarlo y a crear la nueva exposicion

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

    cy.get("#ActionesModuloExhibiciones")
      .contains("a", "Create Exhibition")
      .click();
    cy.wait(1000);

    cy.url().should(
      "contain",
      "http://localhost:4200/exhibicion/createExhibicion"
    );
    cy.get(".container")
      .find("h3")
      .should("contain", "Create a new Exhibition");
    cy.wait(1000);

    const nombreExposicion = "exposicion de prueba";
    const descripcionExposicion = "prueba end to end de HU 10";
    cy.get("input").get("#name").click().type(nombreExposicion);
    cy.get("input").get("#description").click().type(descripcionExposicion);

    cy.get(".container")
      .get("#idSponsor")
      .find("option")
      .its("length")
      .then((len) => {
        cy.get(".container")
          .get("#idSponsor")
          .select(len - 1);
      });

    cy.get(".container")
      .get("#idMuseum")
      .select("Bendigo Art Gallery", { force: true })
      .invoke("val")
      .should("contain", "100");

    cy.get(".container").get(".btn.btn-primary").click();
  });
});
