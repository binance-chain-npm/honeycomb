describe('Select', () => {
  it('renders correctly', () => {
    cy.clock();
    cy.visitStory({ storyId: 'elements-select--dropdown', themeId: 'GoldLight' });
    cy.tick(10000);

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0"]').should('be.visible');
    cy.get('[data-testid="select.item.1"]').should('be.visible');
    cy.get('[data-testid="select.item.2"]').should('be.visible');

    cy.get('[data-testid="select.item.0"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.content"]').should('not.exist');

    cy.get('[data-testid="select"]').click();
    cy.tick(10000);

    cy.get('[data-testid="select.item.0.tick"]').should('be.visible');
    cy.get('[data-testid="select.item.1.tick"]').should('not.exist');
    cy.get('[data-testid="select.item.2.tick"]').should('not.exist');

    cy.percySnapshot('<Select variant="dropdown" />');
  });
});
