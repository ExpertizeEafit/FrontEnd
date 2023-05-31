describe('Access to all features as an admin', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:5173');
    cy.url().should('include', '/');
    cy.get('a').contains('Log in').click();
    cy.url().should('include', '/login');
    cy.get('input[name="ID"]').type('123456789');
    cy.get('input[name="password"]').type('1234567');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/');
    cy.get('p').contains('Welcome');
  })

  it('Access to requests feature', () => {
    cy.get('a').contains('Requests').click();
    cy.url().should('include', '/pending_requests');
    cy.get('h1').contains('Pending requests');
  });

  it('Access to my profile feature', () => {
    cy.get('a').contains('My profile').click();
    cy.url().should('include', '/profile');
    cy.get('h1').contains('My profile settings');
  });

});