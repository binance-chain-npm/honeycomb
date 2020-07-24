describe('MyBadge', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-card--default', themeId: 'GoldLight' });
    cy.percySnapshot('Badge with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-card--default', themeId: 'GoldDark' });
    cy.percySnapshot('Badge with Gold Dark theme');
  });
});
