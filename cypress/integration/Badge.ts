describe('Badge', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-badge--default', themeId: 'GoldLight' });
    cy.percySnapshot('Badge with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-badge--default', themeId: 'GoldDark' });
    cy.percySnapshot('Badge with Gold Dark theme');
  });
});
