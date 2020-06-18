describe('SolidAvatar', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-solidavatar--default', themeId: 'GoldLight' });
    cy.percySnapshot('SolidAvatar with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-solidavatar--default', themeId: 'GoldDark' });
    cy.percySnapshot('SolidAvatar with Gold Dark theme');
  });
});
