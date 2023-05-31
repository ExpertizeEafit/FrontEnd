describe('Home Test Without User Logged In', () => {
  it('Check the home page render log in button when not logged', () => {
  cy.visit('http://localhost:5173');
  cy.get('h1').contains('Expertize');
  cy.url().should('include', '/');
  cy.get('a').contains('Log in');
  });
});