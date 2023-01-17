describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/');
    cy.get('[data-cy=search-input]').should('exist');
    cy.get('[data-cy=title]').should('exist');
    cy.get('[data-cy=display-card]').should('exist');
    cy.get('[data-cy=map-view]').should('exist');
  });

  it('search foods', () => {
    cy.visit('/');
    cy.get('[data-cy=search-input]').type('sushi{enter}');
    cy.contains('Saito');
  });

  it('restaurant detail', () => {
    cy.visit('/');
    cy.get('[data-cy=display-card]').click({ force: true });
    cy.location('pathname').should('include', '/detail');
    cy.get('[data-cy=restaurant-name]').should('exist');
    cy.get('[data-cy=restaurant-address]').should('exist');
    cy.get('[data-cy=restaurant-rating]').should('exist');
    cy.get('[data-cy=restaurant-working-time]').should('exist');
    cy.get('[data-cy=restaurant-tel]').should('exist');
    cy.get('[data-cy=restaurant-website]').should('exist');
    cy.get('[data-cy=restaurant-map]').should('exist');
    cy.get('[data-cy=back-button]').should('exist').click();
    cy.location('pathname').should('eq', '/home');
  });
});
