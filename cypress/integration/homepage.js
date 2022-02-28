describe('Home', () => {
  it('complete login form & submit', () => {
    cy.visit('http://localhost:3000');
    cy.findByRole('heading', { name: /instagram/i });

    cy.log('Filling the form');
    cy.findByRole('textbox', { name: /username/i })
      .clear()
      .type('Chuck');

    cy.findByLabelText(/password/i)
      .clear()
      .type('Chuck');

    cy.log('Submit the form');
    cy.findByRole('button', { name: /connexion/i }).click();
  });
});
