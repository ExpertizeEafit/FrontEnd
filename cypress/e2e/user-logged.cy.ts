describe('Process to log in', () => {
  it('Check process to log in as an user', () => {
    cy.viewport(2000, 1000);
    cy.visit('http://localhost:5173');
    cy.url().should('include', '/');
    cy.get('a').contains('Log in').click();
    cy.url().should('include', '/login');
    cy.get('input[name="ID"]').type('10800808084');
    cy.get('input[name="password"]').type('12345');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/');
    cy.get('p').contains('Welcome');
    cy.get('a').contains('My certificates');
  });
});