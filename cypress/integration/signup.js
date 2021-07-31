describe("Signup", () => {
  it("complete signup form & submit", () => {
    cy.visit("http://localhost:3000/signup");

    cy.log("Filling the form");
    cy.findByPlaceholderText(/e-mail/i)
      .clear()
      .type("chuck@gmail.com");

    cy.log("Filling the form");
    cy.findByPlaceholderText(/nom complet/i)
      .clear()
      .type("Brams75");

    cy.findByPlaceholderText(/nom d'utilisateur/i)
      .clear()
      .type("Chuck");

    cy.findByPlaceholderText(/mot de passe/i)
      .clear()
      .type("Chuck");

    cy.log("Submit the form");
    cy.findByRole("button", { name: /S'incrire/i }).click();
  });
});
