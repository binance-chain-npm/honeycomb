describe('Tooltip', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeId: 'GoldDark' });

    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.percySnapshot('Tooltip with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeId: 'GoldLight' });

    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.percySnapshot('Tooltip with Gold Light theme');
  });
});
