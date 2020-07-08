describe('Tooltip', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeId: 'GoldDark' });

    cy.clock();
    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.tick(10000);

    cy.percySnapshot('Tooltip with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeId: 'GoldLight' });

    cy.clock();
    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.tick(10000);

    cy.percySnapshot('Tooltip with Gold Light theme');
  });
});
