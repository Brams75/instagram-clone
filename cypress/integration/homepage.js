describe("Home", () => {
  it("complete login form & submit", () => {
    cy.visit("http://localhost:3000");
    cy.findByRole("heading", { name: /instagram/i });

    cy.log("Filling the form");
    cy.findByPlaceholderText(/Num. téléphone, nom d’utilisateur ou e-mail/i)
      .clear()
      .type("chuck@gmail.com");

    cy.findByPlaceholderText(/Mot de passe/i)
      .clear()
      .type("Chuck");

    cy.log("Submit the form");
    cy.findByRole("button", { name: /connexion/i }).click();
  });
});
