describe('Accordion', () => {
  it('opens and closes', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-accordion--default', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="light.accordion.0.children"]').should('not.be.visible');
    cy.get('[data-testid="light.accordion.1.children"]').should('not.be.visible');
    cy.get('[data-testid="light.accordion.0"]').click();
    cy.tick(10000);

    cy.get('[data-testid="light.accordion.0.children"]').should('be.visible');
    cy.get('[data-testid="light.accordion.1.children"]').should('not.be.visible');

    cy.percySnapshot('Accordion');

    cy.get('[data-testid="light.accordion.1"]').click();
    cy.tick(10000);
    cy.get('[data-testid="light.accordion.0.children"]').should('not.be.visible');
    cy.get('[data-testid="light.accordion.1.children"]').should('be.visible');
  });
});
