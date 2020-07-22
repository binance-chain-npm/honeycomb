describe('Card', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-card--default', themeId: 'GoldLight' });
    cy.percySnapshot('Card with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-card--default', themeId: 'GoldDark' });
    cy.percySnapshot('Card with Gold Dark theme');
  });
});
