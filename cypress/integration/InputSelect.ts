describe('InputSelect', () => {
  it('displays modal on small devices', () => {
    cy.viewport(400, 600);
    cy.visitStory({ storyId: 'elements-inputselect--default', themeId: 'GoldLight' });

    cy.get('[data-testid="InputSelect.input"]').click();

    cy.get('[data-testid="InputSelect.modal.content"]').should('be.visible');
    cy.get('[data-testid="InputSelect.tooltip.content"]').should('not.exist');

    cy.get('[data-testid="InputSelect.modal.item.0"]').should('be.visible');
    cy.get('[data-testid="InputSelect.modal.item.1"]').should('be.visible');
    cy.get('[data-testid="InputSelect.modal.item.2"]').should('be.visible');
  });

  it('displays tooltip on large devices', () => {
    cy.viewport(800, 600);
    cy.visitStory({ storyId: 'elements-inputselect--default', themeId: 'GoldLight' });

    cy.get('[data-testid="InputSelect.input"]').click();

    cy.get('[data-testid="InputSelect.modal.content"]').should('not.exist');
    cy.get('[data-testid="InputSelect.tooltip.content"]').should('be.visible');
  });

  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-inputselect--default', themeId: 'GoldDark' });
    cy.clock();
    cy.get('[data-testid="InputSelect.input"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('InputSelect with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-inputselect--default', themeId: 'GoldLight' });
    cy.clock();
    cy.get('[data-testid="InputSelect.input"]').should('be.visible');
    cy.tick(10000);
    cy.percySnapshot('InputSelect with Gold Light theme', { widths: [800] });
  });
});
