describe('SolidAvatar', () => {
  it('renders properly with Gold Light theme', () => {
    cy.visitStory({ storyId: 'elements-solidavatar--default', themeName: 'GoldLight' });
    cy.percySnapshot('SolidAvatar with Gold Light theme');
  });

  it('renders properly with Gold Dark theme', () => {
    cy.visitStory({ storyId: 'elements-solidavatar--default', themeName: 'GoldDark' });
    cy.percySnapshot('SolidAvatar with Gold Dark theme');
  });
});
