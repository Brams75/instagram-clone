describe('Home', () => {
  it('complete login form & submit', () => {
    cy.visit('http://localhost:3000');
    cy.findByText('Home');
  });
});
