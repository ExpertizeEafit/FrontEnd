describe('Process to log in as admin', () => {
  it('All the process related to log in into an admin account and check admin homepage', () => {
    cy.viewport(2000, 1000);
    cy.visit('http://localhost:5173');
    cy.url().should('include', '/');
    cy.get('a').contains('Log in').click();
    cy.url().should('include', '/login');
    cy.get('input[name="ID"]').type('123456789');
    cy.get('input[name="password"]').type('1234567');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/');
    cy.get('p').contains('Welcome');
    cy.get('a').contains('Request');
  });
});