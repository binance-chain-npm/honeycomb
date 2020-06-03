describe('Tooltip', () => {
  it('renders correctly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeName: 'GoldDark' });

    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.percySnapshot('Tooltip with Gold Dark theme');
  });

  it('renders correctly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-tooltip--default', themeName: 'GoldLight' });

    cy.get('[data-testid="Tooltip.target"]').trigger('mouseenter');
    cy.percySnapshot('Tooltip with Gold Light theme');
  });
});
