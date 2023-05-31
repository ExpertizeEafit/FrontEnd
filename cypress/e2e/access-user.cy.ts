describe('Access to all features as an user', () => {
  beforeEach(() => {
    cy.viewport(1280, 720);
    cy.visit('http://localhost:5173');
    cy.url().should('include', '/');
    cy.get('a').contains('Log in').click();
    cy.url().should('include', '/login');
    cy.get('input[name="ID"]').type('10800808084');
    cy.get('input[name="password"]').type('12345');
    cy.get('button').contains('Log in').click();
    cy.url().should('include', '/');
    cy.get('p').contains('Welcome');
  })

  it('Access to seniorities feature', () => {
    cy.get('a').contains('Seniorities').click();
    cy.url().should('include', '/seniorities');
    cy.get('h1').contains('Seniorities learning path');
  });

  it('Access to leaderboard feature', () => {
    cy.get('a').contains('Leaderboard').click();
    cy.url().should('include', '/leaderboard');
    cy.get('h1').contains('Leaderboard');
  });

  it('Access to certificates feature', () => {
    cy.get('a').contains('My certificates').click();
    cy.url().should('include', '/certificates');
    cy.get('h1').contains('My certificates');
  });

  it('Access to my profile feature', () => {
    cy.get('a').contains('My profile').click();
    cy.url().should('include', '/profile');
    cy.get('h1').contains('My profile settings');
  });

});