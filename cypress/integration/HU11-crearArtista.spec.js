/// <reference types="cypress" />

context("Actions", () => {
  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });

  beforeEach(() => {
    cy.visit("http://localhost:4200/home");
    cy.wait(1000);
  });

  it.only("HU11 PRUEBA -1- ", () => {
    cy.get("#navbarNav").contains(" Artists ").click();
    cy.wait(1000);

    cy.get(".dropdown-menu.show").contains("Create").click();
    cy.wait(1000);

    cy.url().should("contain", "http://localhost:4200/artists/create");

    cy.get(".container")
      .find("h2")
      .should("contain", "Create a new artist");
    cy.wait(1000);

    cy.get("input").get("#name").should("have.attr", "id", "name");
    cy.get("input")
      .get("#image")
      .should("have.attr", "id", "image");
    cy.get("input").get("#birthdate").should("have.attr", "id", "birthdate");
    cy.get("input").get("#birthplace").should("have.attr", "id", "birthplace");

    cy.get("input").get("#name").blur({ force: true });
    cy.get("input").get("#image").blur({ force: true });
    cy.get(".container").get("#birthdate").blur({ force: true });
    cy.get(".container").get("#birthplace").blur({ force: true });

    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Name required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Image required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      "Birthdate required"
    );
    cy.get(".alert.alert-danger.alert-dismissible.fade.show").should(
      "contain",
      " Birthplace required "
    );

    const nameArtist = "Van gogh";
    const imageArtist = "https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.britannica.com%2F78%2F43678-050-F4DC8D93%2FStarry-Night-canvas-Vincent-van-Gogh-New-1889.jpg&imgrefurl=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FVincent-van-Gogh&tbnid=MaYsB2d7TwI02M&vet=12ahUKEwjptNrwtYb4AhXTjoQIHfTeAXwQMygCegUIARDhAQ..i&docid=wpm9TCsLu_LuLM&w=1600&h=1264&q=van%20gogh&ved=2ahUKEwjptNrwtYb4AhXTjoQIHfTeAXwQMygCegUIARDhAQ";
    const birdthdateArtist = "1881-10-25";
    const birdPlaceArtist = "Madrid, Spain";
    cy.get("input").get("#name").click().type(nameArtist);
    cy.get("input").get("#image").click().type(imageArtist);

    cy.get("input").get("#birthdate").click().type(birdthdateArtist);
    cy.get("input").get("#birthplace").click().type(birdPlaceArtist);

    cy.get(".container").get(".btn-danger").click();
  });
});
