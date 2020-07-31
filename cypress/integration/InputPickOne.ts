describe('InputPickOne', () => {
  it('displays modal on small devices', () => {
    cy.viewport(400, 600);
    cy.visitStory({ storyId: 'elements-inputpickone--default', themeId: 'GoldLight' });

    cy.get('[data-testid="InputPickOne.input"]').click();

    cy.get('[data-testid="InputPickOne.modal.content"]').should('be.visible');
    cy.get('[data-testid="InputPickOne.tooltip.content"]').should('not.exist');

    cy.get('[data-testid="InputPickOne.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="InputPickOne.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="InputPickOne.modal.item.2"]').should('be.visible');
  });

  it('displays tooltip on large devices', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-inputpickone--default', themeId: 'GoldLight' });

    cy.get('[data-testid="InputPickOne.input"]').click();

    cy.get('[data-testid="InputPickOne.modal.content"]').should('not.exist');
    cy.get('[data-testid="InputPickOne.tooltip.content"]').should('be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-inputpickone--default', themeId: 'GoldDark' });
    cy.clock();
    cy.get('[data-testid="InputPickOne.input"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('InputPickOne with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-inputpickone--default', themeId: 'GoldLight' });
    cy.clock();
    cy.get('[data-testid="InputPickOne.input"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('InputPickOne with Gold Light theme', { widths: [800] });
  });
});
