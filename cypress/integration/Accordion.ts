describe('Accordion', () => {
  it('opens and closes', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-accordion--behaviour', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="accordion.0.children"]').should('not.be.visible');
    cy.get('[data-testid="accordion.1.children"]').should('not.be.visible');
    cy.get('[data-testid="accordion.0"]').click();
    cy.tick(10000);

    cy.get('[data-testid="accordion.0.children"]').should('be.visible');
    cy.get('[data-testid="accordion.1.children"]').should('not.be.visible');
    cy.percySnapshot('Accordion with Gold Light theme');

    cy.get('[data-testid="accordion.1"]').click();
    cy.tick(10000);
    cy.get('[data-testid="accordion.0.children"]').should('not.be.visible');
    cy.get('[data-testid="accordion.1.children"]').should('be.visible');
  });
});
